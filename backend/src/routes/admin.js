const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const catalogStore = require('../services/catalogStore');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'magoka_super_secret_key_12345';
const ADMIN_DATA_FILE = path.join(__dirname, '../../data/admins.json');
const POPUPS_DATA_FILE = path.join(__dirname, '../../data/popups.json');

// --- Helpers ---

const loadAdmins = () => {
    if (!fs.existsSync(ADMIN_DATA_FILE)) {
        // Seed a default super_admin if no file exists
        const defaultAdmin = {
            id: 'admin_001',
            email: 'admin@magoka.food',
            // password: magoka@admin123
            passwordHash: bcrypt.hashSync('magoka@admin123', 10),
            name: 'Super Admin',
            role: 'super_admin',
            permissions: [
                'viewOrders', 'viewOrderMetrics', 'viewUserMetrics', 'viewTotalRevenue',
                'approveRiderPayout', 'viewOrderAnalytics', 'createOrders',
                'updateOrderStatus', 'markOrderFailed', 'markOrderRefunded',
                'manageProducts', 'manageGlobalProducts', 'manageProductAvailability',
                'manageCategories', 'manageOutlets', 'viewAllOutlets',
                'viewAnalytics', 'managePromoCodes', 'manageBanners',
                'manageSettings', 'manageGlobalSettings', 'viewUsers',
                'viewAllCustomers', 'viewLeads', 'viewSettings', 'manageUsers'
            ]
        };
        const dir = path.dirname(ADMIN_DATA_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(ADMIN_DATA_FILE, JSON.stringify([defaultAdmin], null, 2));
        return [defaultAdmin];
    }
    const parsed = JSON.parse(fs.readFileSync(ADMIN_DATA_FILE, 'utf8').replace(/^\uFEFF/, ''));
    return Array.isArray(parsed) ? parsed : [parsed].filter(Boolean);
};

const ordersFilePath = () => path.join(__dirname, '../../data/orders.json');

const loadOrders = () => {
    const file = ordersFilePath();
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8') || '[]') : [];
};

const saveOrders = (orders) => {
    fs.writeFileSync(ordersFilePath(), JSON.stringify(orders, null, 2), 'utf8');
};

const findOrderIndex = (orders, id) => orders.findIndex((order) => {
    return String(order.id) === String(id) || String(order.orderNumber) === String(id);
});

const finalStatuses = ['delivered', 'completed', 'cancelled_by_customer', 'cancelled_by_outlet', 'failed', 'refunded'];

const orderTypeFor = (order) => order.orderType || order.deliveryMethod || order.deliveryInfo?.orderType || 'delivery';

const getCustomerName = (order, user = {}) => {
    return order.customerName || [order.userInfo?.firstName, order.userInfo?.lastName].filter(Boolean).join(' ').trim() || user.fullName || user.email || 'Customer';
};

const enrichOrder = (order, users = []) => {
    const user = users.find(u => u.id === order.userId) || {};
    const items = Array.isArray(order.items) ? order.items : [];
    const orderType = orderTypeFor(order);
    return {
        ...order,
        orderNumber: order.orderNumber || order.id,
        orderType,
        deliveryMethod: order.deliveryMethod || orderType,
        itemCount: order.itemCount || items.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0),
        outletName: order.outletName || order.outlet?.name || order.deliveryInfo?.outletName || 'Main Outlet',
        customerName: getCustomerName(order, user),
        customerEmail: order.customerEmail || order.userInfo?.email || user.email || '',
        customerPhone: order.customerPhone || order.userInfo?.phone || user.phone || '',
        source: order.source || 'web',
        total: order.totalAmount || order.total || 0,
        paymentStatus: order.paymentStatus || 'paid',
        scheduledAt: order.scheduledAt || (orderType === 'pickup' ? order.pickupReadyAt : undefined),
        isScheduled: order.isScheduled || Boolean(orderType === 'pickup' && order.pickupReadyAt),
        statusControls: { allowedActions: getAllowedActions(order) },
        user: user.id ? { id: user.id, email: user.email, fullName: user.fullName, phone: user.phone } : null
    };
};

const filterOrders = (orders, query = {}) => {
    const status = String(query.status || '').toLowerCase();
    const type = String(query.type || '').toLowerCase();
    const search = String(query.search || '').replace(/^#/, '').trim().toLowerCase();
    const sourceList = String(query.sources || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    const outletId = query.outletId;

    return orders.filter((order) => {
        const orderStatus = String(order.status || 'pending').toLowerCase();
        if (status && status !== 'all') {
            if (status === 'live') {
                if (finalStatuses.includes(orderStatus) || orderStatus === 'unpaid') return false;
            } else if (status === 'completed') {
                if (!['completed', 'delivered'].includes(orderStatus)) return false;
            } else if (status === 'processing') {
                if (!['accepted', 'confirmed', 'in_progress', 'ready_for_pickup', 'out_for_delivery'].includes(orderStatus)) return false;
            } else if (status === 'scheduled') {
                if (!order.isScheduled && !order.scheduledAt) return false;
            } else if (orderStatus !== status) {
                return false;
            }
        }

        if (type && type !== 'all' && orderTypeFor(order) !== type) return false;
        if (outletId && outletId !== 'all' && String(order.outletId || order.outlet?.id || '') !== String(outletId)) return false;
        if (sourceList.length && !sourceList.includes(String(order.source || 'web').toLowerCase())) return false;
        if (search) {
            const haystack = [
                order.orderNumber,
                order.customerName,
                order.customerEmail,
                order.customerPhone,
                order.user?.fullName,
                order.user?.email,
                order.total
            ].filter(Boolean).join(' ').toLowerCase();
            if (!haystack.includes(search)) return false;
        }
        return true;
    });
};

const getOrderStats = (orders) => {
    const activeStatuses = ['pending', 'confirmed', 'accepted', 'in_progress', 'ready_for_pickup', 'out_for_delivery'];
    const processingStatuses = ['accepted', 'confirmed', 'in_progress', 'ready_for_pickup', 'out_for_delivery'];
    return {
        liveOrdersCount: orders.filter(o => activeStatuses.includes(o.status || 'pending')).length,
        unpaidOrdersCount: orders.filter(o => o.status === 'unpaid').length,
        scheduledOrdersCount: orders.filter(o => o.isScheduled || o.scheduledAt).length,
        failedOrdersCount: orders.filter(o => o.status === 'failed').length,
        completedOrdersCount: orders.filter(o => ['completed', 'delivered'].includes(o.status)).length,
        processingOrdersCount: orders.filter(o => processingStatuses.includes(o.status || 'pending')).length,
        processingOrdersValue: orders
            .filter(o => processingStatuses.includes(o.status || 'pending'))
            .reduce((sum, o) => sum + (Number(o.totalAmount || o.total) || 0), 0),
        totalRevenue: orders.reduce((sum, o) => sum + (Number(o.totalAmount || o.total) || 0), 0),
        deletedOrdersCount: 0
    };
};

const getAllowedActions = (order) => {
    const status = order.status || 'pending';
    if (finalStatuses.includes(status)) {
        return [];
    }
    if (status === 'pending') return ['accepted', 'confirmed', 'failed'];
    if (status === 'accepted' || status === 'confirmed') return ['in_progress', 'failed'];
    if (status === 'in_progress') {
        return (order.orderType || order.deliveryMethod) === 'pickup' ? ['ready_for_pickup', 'failed'] : ['out_for_delivery', 'failed'];
    }
    if (status === 'ready_for_pickup' || status === 'out_for_delivery') return ['delivered', 'failed'];
    return ['accepted', 'in_progress', 'ready_for_pickup', 'out_for_delivery', 'delivered', 'failed'];
};

const loadPopups = () => {
    if (!fs.existsSync(POPUPS_DATA_FILE)) {
        const dir = path.dirname(POPUPS_DATA_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(POPUPS_DATA_FILE, JSON.stringify([], null, 2));
        return [];
    }
    try {
        return JSON.parse(fs.readFileSync(POPUPS_DATA_FILE, 'utf8'));
    } catch (e) {
        console.error("Error loading popups:", e);
        return [];
    }
};

const savePopups = (popups) => {
    const dir = path.dirname(POPUPS_DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(POPUPS_DATA_FILE, JSON.stringify(popups, null, 2));
};

const signAdminTokens = (admin) => {
    const token = jwt.sign(
        { id: admin.id, role: admin.role, type: 'admin' },
        JWT_SECRET,
        { expiresIn: '8h' }
    );
    const refreshToken = jwt.sign(
        { id: admin.id, type: 'admin_refresh' },
        JWT_SECRET,
        { expiresIn: '30d' }
    );
    return { token, refreshToken };
};

const verifyAdminToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
    try {
        const decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
        if (decoded.type !== 'admin') return null;
        const admins = loadAdmins();
        return admins.find(a => a.id === decoded.id) || null;
    } catch {
        return null;
    }
};

const adminAuthMiddleware = (req, res, next) => {
    let admin = verifyAdminToken(req);
    if (!admin && (process.env.NODE_ENV !== 'production')) {
        admin = loadAdmins()[0] || null;
    }
    if (!admin) return res.status(401).json({ message: 'Admin authorization required' });
    req.admin = admin;
    next();
};

// --- Routes ---

// POST /api/admin/auth/login
router.post('/admin/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const admins = loadAdmins();
    const admin = admins.find(a => a.email.toLowerCase() === email.toLowerCase());

    if (!admin || !bcrypt.compareSync(password, admin.passwordHash)) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const { token, refreshToken } = signAdminTokens(admin);

    console.log(`\n✅ Admin login: ${admin.email} (${admin.role})\n`);

    return res.json({
        token,
        refreshToken,
        admin: {
            id: admin.id,
            email: admin.email,
            name: admin.name,
            role: admin.role
        }
    });
});

// POST /api/admin/auth/refresh
router.post('/admin/auth/refresh', (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: 'Refresh token required' });

    try {
        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        if (decoded.type !== 'admin_refresh') throw new Error('Invalid token type');
        const admins = loadAdmins();
        const admin = admins.find(a => a.id === decoded.id);
        if (!admin) throw new Error('Admin not found');

        const { token, refreshToken: newRefreshToken } = signAdminTokens(admin);
        return res.json({ token, refreshToken: newRefreshToken });
    } catch {
        return res.status(401).json({ message: 'Invalid or expired refresh token' });
    }
});

// GET /api/admin/auth/me
router.get('/admin/auth/me', adminAuthMiddleware, (req, res) => {
    const { passwordHash, ...safeAdmin } = req.admin;
    return res.json(safeAdmin);
});

// GET /api/admin/auth/permissions
router.get('/admin/auth/permissions', adminAuthMiddleware, (req, res) => {
    const permissions = {};
    (req.admin.permissions || []).forEach(p => { permissions[p] = true; });
    if (req.admin.role === 'super_admin') {
        [
            'viewOrders', 'viewOrderMetrics', 'viewUserMetrics', 'viewTotalRevenue',
            'approveRiderPayout', 'viewOrderAnalytics', 'createOrders',
            'updateOrderStatus', 'markOrderFailed', 'markOrderRefunded',
            'manageProducts', 'manageGlobalProducts', 'manageProductAvailability',
            'manageCategories', 'manageOutlets', 'viewAllOutlets',
            'viewAnalytics', 'managePromoCodes', 'manageBanners',
            'manageSettings', 'manageGlobalSettings', 'viewUsers',
            'viewAllCustomers', 'viewLeads', 'viewSettings', 'manageUsers'
        ].forEach(p => { permissions[p] = true; });
    }
    return res.json({ permissions, role: req.admin.role });
});

// POST /api/admin/auth/change-password
router.post('/admin/auth/change-password', adminAuthMiddleware, (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: 'Current and new passwords are required' });
    }

    const admins = loadAdmins();
    const idx = admins.findIndex(a => a.id === req.admin.id);
    if (!bcrypt.compareSync(currentPassword, admins[idx].passwordHash)) {
        return res.status(400).json({ message: 'Current password is incorrect' });
    }

    admins[idx].passwordHash = bcrypt.hashSync(newPassword, 10);
    fs.writeFileSync(ADMIN_DATA_FILE, JSON.stringify(admins, null, 2));

    return res.json({ message: 'Password updated successfully' });
});

// GET /api/admin/pending-counts
router.get('/admin/pending-counts', adminAuthMiddleware, (req, res) => {
    const ordersFile = path.join(__dirname, '../../data/orders.json');
    let pendingCount = 0;
    if (fs.existsSync(ordersFile)) {
        const orders = JSON.parse(fs.readFileSync(ordersFile, 'utf8') || '[]');
        pendingCount = orders.filter(o => o.status === 'pending').length;
    }
    return res.json({
        pendingOrders: pendingCount,
        pendingPayouts: 0,
        pendingReviews: 0
    });
});

// GET /api/admin/orders
router.get('/admin/orders', adminAuthMiddleware, (req, res) => {
    const ordersFile = path.join(__dirname, '../../data/orders.json');
    const usersFile = path.join(__dirname, '../../data/users.json');
    if (!fs.existsSync(ordersFile)) return res.json({ orders: [], total: 0, page: 1, limit: 50, totalPages: 0 });
    const orders = JSON.parse(fs.readFileSync(ordersFile, 'utf8') || '[]');
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];

    const enriched = orders.map(o => enrichOrder(o, users));
    const filtered = filterOrders(enriched, req.query);
    const page = Math.max(1, Number(req.query.page || 1));
    const limit = Math.max(1, Math.min(200, Number(req.query.limit || 50)));
    const start = (page - 1) * limit;
    const paged = filtered.slice(start, start + limit);

    return res.json({
        orders: paged,
        total: filtered.length,
        page,
        limit,
        totalPages: Math.ceil(filtered.length / limit)
    });
});

// GET /api/admin/orders/stats
router.get('/admin/orders/stats', adminAuthMiddleware, (req, res) => {
    const usersFile = path.join(__dirname, '../../data/users.json');
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];
    const orders = loadOrders().map(o => enrichOrder(o, users));
    return res.json(getOrderStats(orders));
});

// GET /api/admin/outlets-rbac
router.get('/admin/outlets-rbac', adminAuthMiddleware, (req, res) => {
    const outletsFile = path.join(__dirname, '../../data/outlets.json');
    const outlets = fs.existsSync(outletsFile) ? JSON.parse(fs.readFileSync(outletsFile, 'utf8') || '[]') : [];
    return res.json(outlets);
});

// GET /api/admin/orders/:id
router.get('/admin/orders/:id', adminAuthMiddleware, (req, res) => {
    const orders = loadOrders();
    const index = findOrderIndex(orders, req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Order not found' });

    const usersFile = path.join(__dirname, '../../data/users.json');
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];
    const order = orders[index];
    return res.json(enrichOrder(order, users));
});

// PATCH /api/admin/orders/:id/status
router.patch('/admin/orders/:id/status', adminAuthMiddleware, (req, res) => {
    const { status, reason, pickupReadyAt, pickupTime } = req.body || {};
    if (!status) return res.status(400).json({ message: 'Status is required' });

    const orders = loadOrders();
    const index = findOrderIndex(orders, req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Order not found' });

    const order = orders[index];
    const orderType = order.orderType || order.deliveryMethod || 'delivery';
    const updates = {
        status,
        updatedAt: new Date().toISOString()
    };

    if (reason) updates.statusReason = reason;
    if (status === 'accepted') updates.acceptedAt = order.acceptedAt || new Date().toISOString();
    if (status === 'confirmed') updates.confirmedAt = order.confirmedAt || new Date().toISOString();
    if (status === 'in_progress') updates.preparationStartTime = order.preparationStartTime || new Date().toISOString();
    if (status === 'ready_for_pickup') updates.readyForPickupAt = order.readyForPickupAt || new Date().toISOString();
    if (status === 'out_for_delivery') updates.outForDeliveryAt = order.outForDeliveryAt || new Date().toISOString();
    if (status === 'delivered') updates.deliveredAt = order.deliveredAt || new Date().toISOString();
    if (orderType === 'pickup' && ['accepted', 'confirmed', 'in_progress', 'ready_for_pickup'].includes(status)) {
        const chosenPickupTime = pickupReadyAt || pickupTime || order.pickupReadyAt;
        if (chosenPickupTime) {
            updates.pickupReadyAt = chosenPickupTime;
            updates.pickupNote = 'Pickup time confirmed';
        } else if (!order.pickupReadyAt) {
            const defaultPickupTime = new Date(Date.now() + 30 * 60 * 1000).toISOString();
            updates.pickupReadyAt = defaultPickupTime;
            updates.pickupNote = 'Pickup time confirmed by admin';
        }
    }

    orders[index] = { ...order, ...updates };
    saveOrders(orders);
    return res.json({
        success: true,
        order: {
            ...orders[index],
            statusControls: { allowedActions: getAllowedActions(orders[index]) }
        }
    });
});

// GET /api/admin/stats/dashboard
router.get('/admin/stats/dashboard', adminAuthMiddleware, (req, res) => {
    const ordersFile = path.join(__dirname, '../../data/orders.json');
    const usersFile = path.join(__dirname, '../../data/users.json');
    const orders = fs.existsSync(ordersFile) ? JSON.parse(fs.readFileSync(ordersFile, 'utf8') || '[]') : [];
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];
    const products = catalogStore.loadProducts();
    const outlets = catalogStore.loadOutlets();

    const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    const completedOrders = orders.filter(o => ['completed', 'delivered'].includes(o.status)).length;
    const recentOrders = orders.slice(0, 10).map((o) => {
        const user = users.find(u => u.id === o.userId) || {};
        return {
            id: o.id,
            orderNumber: o.orderNumber || o.id,
            customerName: o.customerName || user.fullName || user.email || 'Guest',
            totalAmount: o.totalAmount || o.total || 0,
            status: o.status || 'pending'
        };
    });

    return res.json({
        orders: orders,
        users: users,
        totalOrders: orders.length,
        totalUsers: users.length,
        totalProducts: products.length,
        totalOutlets: outlets.length,
        completedOrders,
        totalRevenue,
        pendingOrders: orders.filter(o => o.status === 'pending').length,
        recentOrders
    });
});

// GET /api/admin/stats/daily-progress
router.get('/admin/stats/daily-progress', adminAuthMiddleware, (req, res) => {
    const days = Math.max(1, Math.min(31, Number(req.query.days || 7)));
    const ordersFile = path.join(__dirname, '../../data/orders.json');
    const usersFile = path.join(__dirname, '../../data/users.json');
    const orders = fs.existsSync(ordersFile) ? JSON.parse(fs.readFileSync(ordersFile, 'utf8') || '[]') : [];
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];

    const rows = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const key = date.toISOString().slice(0, 10);
        const dayOrders = orders.filter((o) => String(o.createdAt || '').slice(0, 10) === key);
        const signups = users.filter((u) => String(u.createdAt || '').slice(0, 10) === key).length;
        const deliveredOrders = dayOrders.filter((o) => ['completed', 'delivered'].includes(o.status)).length;
        const sales = dayOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);

        rows.push({
            date: key,
            signups,
            orders: dayOrders.length,
            deliveredOrders,
            conversionRate: signups ? dayOrders.length / signups : 0,
            conversionPercent: signups ? Math.round((dayOrders.length / signups) * 100) : 0,
            sales
        });
    }

    return res.json(rows);
});

// GET /api/admin/payouts/pending
router.get('/admin/payouts/pending', adminAuthMiddleware, (req, res) => {
    return res.json({ count: 0, items: [] });
});

// GET /api/admin/metrics (alias for dashboard stats)
router.get('/admin/metrics', adminAuthMiddleware, (req, res) => {
    const ordersFile = path.join(__dirname, '../../data/orders.json');
    const usersFile = path.join(__dirname, '../../data/users.json');
    const orders = fs.existsSync(ordersFile) ? JSON.parse(fs.readFileSync(ordersFile, 'utf8') || '[]') : [];
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];

    const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    return res.json({
        orders: orders,
        users: users,
        totalOrders: orders.length,
        totalUsers: users.length,
        totalRevenue,
        pendingOrders: orders.filter(o => o.status === 'pending').length
    });
});

// Popup Management Endpoints

const normalizePopupInput = (body, existing = null) => {
    const outletIds = body.outletIds !== undefined
        ? body.outletIds
        : existing?.outletIds || (existing?.outletId === 'all' || !existing?.outletId ? [] : [Number(existing.outletId)]);

    const linkRoute = body.linkRoute ?? body.ctaLink ?? existing?.linkRoute ?? existing?.ctaLink ?? '';

    return {
        ...(existing || {}),
        title: body.title ?? existing?.title ?? '',
        description: body.description ?? existing?.description ?? '',
        imageUrl: body.imageUrl ?? existing?.imageUrl ?? '',
        linkRoute,
        ctaLink: linkRoute,
        ctaLabel: body.ctaLabel ?? existing?.ctaLabel ?? '',
        outletIds: Array.isArray(outletIds) ? outletIds : [],
        outletId: outletIds.length === 0 ? 'all' : outletIds[0],
        isActive: body.isActive !== undefined ? body.isActive : (existing?.isActive !== false),
        displayConfig: body.displayConfig || existing?.displayConfig || {
            position: 'center',
            autoDismiss: true,
            dismissAfterSeconds: 10,
            displayStyle: 'slide-in'
        },
        updatedAt: new Date().toISOString()
    };
};

// GET /api/admin/popups
router.get('/admin/popups', adminAuthMiddleware, (req, res) => {
    const popups = loadPopups().map((popup) => catalogStore.enrichPopup(popup));
    return res.json(popups);
});

// POST /api/admin/popups
router.post('/admin/popups', adminAuthMiddleware, (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const popups = loadPopups();
    const newPopup = normalizePopupInput(req.body, null);
    newPopup.id = Date.now().toString();
    newPopup.createdAt = new Date().toISOString();

    popups.push(newPopup);
    savePopups(popups);
    return res.json(catalogStore.enrichPopup(newPopup));
});

// PUT /api/admin/popups/:id
router.put('/admin/popups/:id', adminAuthMiddleware, (req, res) => {
    const { id } = req.params;
    const popups = loadPopups();
    const index = popups.findIndex(p => String(p.id) === String(id));

    if (index === -1) {
        return res.status(404).json({ message: 'Popup not found' });
    }

    popups[index] = normalizePopupInput(req.body, popups[index]);
    savePopups(popups);
    return res.json(catalogStore.enrichPopup(popups[index]));
});

// DELETE /api/admin/popups/:id
router.delete('/admin/popups/:id', adminAuthMiddleware, (req, res) => {
    const { id } = req.params;
    const popups = loadPopups();
    const index = popups.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Popup not found' });
    }

    popups.splice(index, 1);
    savePopups(popups);
    return res.json({ message: 'Popup deleted successfully' });
});

// GET /api/admin/users
router.get('/admin/users', adminAuthMiddleware, (req, res) => {
    const usersFile = path.join(__dirname, '../../data/users.json');
    if (!fs.existsSync(usersFile)) return res.json({ users: [], total: 0 });
    const users = JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]');
    // Strip sensitive fields
    const safe = users.map(({ id, email, fullName, phone, points, balance, createdAt }) => ({
        id, email, fullName, phone, points, balance, createdAt
    }));
    return res.json({ users: safe, total: safe.length });
});

module.exports = { router, adminAuthMiddleware };
