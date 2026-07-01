const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// POST /api/cart/save
router.post('/cart/save', authMiddleware, (req, res) => {
    const { items } = req.body;
    if (!Array.isArray(items)) {
        return res.status(400).json({ message: 'Items list is required' });
    }

    db.carts.set(req.user.id, items);
    return res.json({ success: true, message: 'Cart saved successfully' });
});

// GET /api/cart
router.get('/cart', authMiddleware, (req, res) => {
    const items = db.carts.get(req.user.id);
    return res.json(items);
});

// POST /api/orders
router.post('/orders', authMiddleware, (req, res) => {
    const { items, address, deliveryMethod, total, notes, paymentMethod } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: 'Cannot place an empty order' });
    }

    const order = db.orders.insert({
        userId: req.user.id,
        items,
        address: address || {},
        deliveryMethod: deliveryMethod || 'delivery',
        total: total || 0,
        notes: notes || '',
        paymentMethod: paymentMethod || 'cash',
        status: 'pending' // default status
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

    return res.json({ success: true, order });
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

module.exports = router;
