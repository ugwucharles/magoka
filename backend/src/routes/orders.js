const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const optionalAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return next();
    return authMiddleware(req, res, next);
};

const emptyCart = () => ({
    items: [],
    subtotal: 0,
    deliveryFee: 0,
    discount: 0,
    total: 0
});

const cartKeyFor = (req, sessionId) => req.user?.id || sessionId || 'guest';

const readDataFile = (filename, fallback = []) => {
    try {
        const filePath = path.join(__dirname, '../../data', filename);
        return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8') || JSON.stringify(fallback)) : fallback;
    } catch (error) {
        console.warn(`Unable to read ${filename}:`, error.message);
        return fallback;
    }
};

const toNumber = (value, fallback = 0) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
};

const normalizeTrackingOrder = (order) => {
    const products = readDataFile('products.json');
    const outlets = readDataFile('outlets.json');
    const outlet = outlets.find(o => String(o.id) === String(order.outletId)) || outlets[0] || {};
    const orderType = order.orderType || order.deliveryMethod || order.deliveryInfo?.orderType || 'delivery';
    const items = Array.isArray(order.items) ? order.items.map((item, index) => {
        const product = products.find(p => String(p.id) === String(item.productId)) || {};
        const unitPrice = toNumber(item.unitPrice, toNumber(product.basePrice));
        const quantity = toNumber(item.quantity, 1);
        const totalPrice = toNumber(item.totalPrice, unitPrice * quantity);
        return {
            id: item.id || `${order.id || order.orderNumber}-${item.productId || index}`,
            productId: item.productId,
            name: item.name || product.name || 'Meal',
            imageUrl: item.imageUrl || product.imageUrl || product.image,
            quantity,
            unitPrice,
            totalPrice,
            customizations: Array.isArray(item.customizations) ? item.customizations : [],
            addons: Array.isArray(item.addons) ? item.addons : [],
            specialInstructions: item.specialInstructions || ''
        };
    }) : [];
    const subtotal = toNumber(order.subtotal, items.reduce((sum, item) => sum + toNumber(item.totalPrice), 0));
    const deliveryFee = toNumber(order.deliveryFee);
    const discount = toNumber(order.discount);
    const total = toNumber(order.total, Math.max(0, subtotal + deliveryFee - discount));
    return {
        ...order,
        orderNumber: order.orderNumber || order.id,
        orderType,
        deliveryAddress: order.deliveryAddress || order.address?.formattedAddress || order.address?.address || '',
        pickupReadyAt: order.pickupReadyAt || null,
        pickupNote: order.pickupNote || (orderType === 'pickup' ? 'Waiting for admin to confirm pickup time' : null),
        scheduledAt: order.scheduledAt || (orderType === 'pickup' ? order.pickupReadyAt : undefined),
        isScheduled: order.isScheduled || Boolean(orderType === 'pickup' && order.pickupReadyAt),
        outlet: {
            id: outlet.id || order.outletId || 9,
            name: outlet.name || 'Main Outlet',
            phone: outlet.phone || '',
            address: outlet.address || ''
        },
        items,
        subtotal,
        deliveryFee,
        discount,
        total,
        walletAmount: toNumber(order.walletAmount),
        paymentStatus: order.paymentStatus || 'paid',
        reviews: Array.isArray(order.reviews) ? order.reviews : []
    };
};

// POST /api/cart/save
router.post('/cart/save', optionalAuth, (req, res) => {
    const cartData = req.body.cartData || { ...emptyCart(), items: req.body.items || [] };
    if (!Array.isArray(cartData.items)) {
        return res.status(400).json({ message: 'Cart items list is required' });
    }

    db.carts.set(cartKeyFor(req, req.body.sessionId), cartData);
    return res.json({ success: true, message: 'Cart saved successfully' });
});

// GET /api/cart/:sessionId
router.get('/cart/:sessionId', optionalAuth, (req, res) => {
    const cart = db.carts.get(cartKeyFor(req, req.params.sessionId));
    return res.json(cart && !Array.isArray(cart) ? cart : { ...emptyCart(), items: Array.isArray(cart) ? cart : [] });
});

// GET /api/cart
router.get('/cart', optionalAuth, (req, res) => {
    const cart = db.carts.get(cartKeyFor(req, req.query.sessionId));
    return res.json(cart && !Array.isArray(cart) ? cart : { ...emptyCart(), items: Array.isArray(cart) ? cart : [] });
});

// POST /api/orders
router.post('/orders', authMiddleware, (req, res) => {
    const { items, address, deliveryMethod, orderType, deliveryInfo, total, notes, paymentMethod } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: 'Cannot place an empty order' });
    }
    const normalizedOrderType = orderType === 'pickup' || deliveryMethod === 'pickup' || deliveryInfo?.orderType === 'pickup' ? 'pickup' : 'delivery';

    const order = db.orders.insert({
        userId: req.user.id,
        items,
        address: address || {},
        deliveryMethod: normalizedOrderType,
        orderType: normalizedOrderType,
        deliveryAddress: normalizedOrderType === 'delivery' ? req.body.deliveryAddress || address?.address || address?.formattedAddress || '' : null,
        pickupReadyAt: normalizedOrderType === 'pickup' ? null : undefined,
        pickupNote: normalizedOrderType === 'pickup' ? 'Waiting for admin to confirm pickup time' : undefined,
        total: total || 0,
        notes: notes || '',
        paymentMethod: paymentMethod || 'cash',
        paymentStatus: 'paid',
        status: 'pending'
    });

    // Clear user's active cart after placing order
    db.carts.set(req.user.id, []);

    // Reward user with some points for buying!
    const pointsEarned = Math.floor((total || 0) * 0.1); // 10% cash back in points
    if (pointsEarned > 0) {
        db.users.update(req.user.id, {
            points: (req.user.points || 0) + pointsEarned
        });
    }

    return res.json({ success: true, ...order, order });
});

// GET /api/orders/my-orders
router.get('/orders/my-orders', authMiddleware, (req, res) => {
    const myOrders = db.orders.findByUser(req.user.id);
    return res.json(myOrders);
});

// GET /api/orders/by-number/:orderNumber
router.get('/orders/by-number/:orderNumber', authMiddleware, (req, res) => {
    const { orderNumber } = req.params;
    const orders = db.orders.all();
    const order = orders.find(o => o.orderNumber === orderNumber && o.userId === req.user.id);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    return res.json(order);
});

// GET /api/orders/:orderNumber/track
router.get('/orders/:orderNumber/track', (req, res) => {
    const { orderNumber } = req.params;
    const orders = db.orders.all();
    const order = orders.find(o => String(o.orderNumber) === String(orderNumber) || String(o.id) === String(orderNumber));
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    return res.json(normalizeTrackingOrder(order));
});

// GET /api/orders/:orderNumber/rating
router.get('/orders/:orderNumber/rating', (req, res) => {
    return res.json(null);
});

module.exports = router;
