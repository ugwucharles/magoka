const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

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
                'manageProducts', 'manageCategories', 'manageBanners', 'manageSettings'
            ]
        };
        const dir = path.dirname(ADMIN_DATA_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(ADMIN_DATA_FILE, JSON.stringify([defaultAdmin], null, 2));
        return [defaultAdmin];
    }
    return JSON.parse(fs.readFileSync(ADMIN_DATA_FILE, 'utf8'));
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
    const admin = verifyAdminToken(req);
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
    if (!fs.existsSync(ordersFile)) return res.json([]);
    const orders = JSON.parse(fs.readFileSync(ordersFile, 'utf8') || '[]');
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];

    const enriched = orders.map(o => {
        const user = users.find(u => u.id === o.userId);
        return { ...o, user: user ? { id: user.id, email: user.email, fullName: user.fullName, phone: user.phone } : null };
    });
    return res.json(enriched);
});

// GET /api/admin/stats/dashboard
router.get('/admin/stats/dashboard', adminAuthMiddleware, (req, res) => {
    const ordersFile = path.join(__dirname, '../../data/orders.json');
    const usersFile = path.join(__dirname, '../../data/users.json');
    const orders = fs.existsSync(ordersFile) ? JSON.parse(fs.readFileSync(ordersFile, 'utf8') || '[]') : [];
    const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]') : [];

    const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
    return res.json({
        totalOrders: orders.length,
        totalUsers: users.length,
        totalRevenue,
        pendingOrders: orders.filter(o => o.status === 'pending').length
    });
});

// Popup Management Endpoints

// GET /api/admin/popups
router.get('/admin/popups', adminAuthMiddleware, (req, res) => {
    const popups = loadPopups();
    return res.json(popups);
});

// POST /api/admin/popups
router.post('/admin/popups', adminAuthMiddleware, (req, res) => {
    const { title, description, imageUrl, ctaLabel, ctaLink, outletId, isActive, displayConfig } = req.body;
    
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const popups = loadPopups();
    const newPopup = {
        id: Date.now().toString(),
        title,
        description: description || '',
        imageUrl: imageUrl || '',
        ctaLabel: ctaLabel || '',
        ctaLink: ctaLink || '',
        outletId: outletId || 'all',
        isActive: isActive !== false,
        displayConfig: displayConfig || {
            position: 'center',
            autoDismiss: true,
            dismissAfterSeconds: 10,
            displayStyle: 'slide-in'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    popups.push(newPopup);
    savePopups(popups);
    return res.json(newPopup);
});

// PUT /api/admin/popups/:id
router.put('/admin/popups/:id', adminAuthMiddleware, (req, res) => {
    const { id } = req.params;
    const { title, description, imageUrl, ctaLabel, ctaLink, outletId, isActive, displayConfig } = req.body;

    const popups = loadPopups();
    const index = popups.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Popup not found' });
    }

    popups[index] = {
        ...popups[index],
        title: title || popups[index].title,
        description: description !== undefined ? description : popups[index].description,
        imageUrl: imageUrl !== undefined ? imageUrl : popups[index].imageUrl,
        ctaLabel: ctaLabel !== undefined ? ctaLabel : popups[index].ctaLabel,
        ctaLink: ctaLink !== undefined ? ctaLink : popups[index].ctaLink,
        outletId: outletId !== undefined ? outletId : popups[index].outletId,
        isActive: isActive !== undefined ? isActive : popups[index].isActive,
        displayConfig: displayConfig || popups[index].displayConfig,
        updatedAt: new Date().toISOString()
    };

    savePopups(popups);
    return res.json(popups[index]);
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
