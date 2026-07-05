const express = require('express');
const catalogStore = require('../services/catalogStore');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const POPUPS_DATA_FILE = require('path').join(__dirname, '../../data/popups.json');
const fs = require('fs');

const loadPopups = () => {
    if (!fs.existsSync(POPUPS_DATA_FILE)) return [];
    try {
        return JSON.parse(fs.readFileSync(POPUPS_DATA_FILE, 'utf8'));
    } catch (e) {
        console.error('Error loading popups:', e);
        return [];
    }
};

const loadFrontendApiFile = (filename, defaultVal = []) => {
    const filePath = require('path').join(catalogStore.FRONTEND_DIR, 'api', filename);
    if (!fs.existsSync(filePath)) return defaultVal;
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
        console.error(`Error loading frontend API file ${filename}:`, e);
        return defaultVal;
    }
};

// GET /api/brands/current
router.get('/brands/current', (req, res) => {
    const brands = catalogStore.loadBrands();
    const brand = brands.find((b) => b.isDefault) || brands[0] || catalogStore.loadBrands()[0];
    return res.json(brand);
});

// GET /api/categories
router.get('/categories', (req, res) => {
    return res.json(catalogStore.loadCategories());
});

// GET /api/homepage-layout
router.get('/homepage-layout', (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.homepageLayout || { layout: 'categories' });
});

// GET /api/popular-items-sort-by
router.get('/popular-items-sort-by', (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.popularItemsSortBy || { sortBy: 'default' });
});

// GET /api/banners
router.get('/banners', (req, res) => {
    const banners = catalogStore.loadBanners().filter((b) => b.isActive !== false);
    return res.json(banners);
});

// GET /api/location/nearest-outlet
router.get('/location/nearest-outlet', (req, res) => {
    const outlets = catalogStore.loadOutlets();
    const outlet = outlets.find((o) => o.isActive !== false) || outlets[0];
    return res.json({ ...outlet, distance: 0.86 });
});

// GET /api/outlets
router.get('/outlets', (req, res) => {
    return res.json(catalogStore.loadOutlets().filter((o) => o.isActive !== false));
});

// GET /api/products
router.get('/products', (req, res) => {
    const { categoryId, outletId } = req.query;
    return res.json(catalogStore.getPublicProducts({ categoryId, outletId }));
});

// GET /api/products/popular
router.get('/products/popular', (req, res) => {
    const { limit, outletId } = req.query;
    let popular = catalogStore.getPublicProducts({ outletId }).filter((p) => p.isPopular);
    if (limit) popular = popular.slice(0, Number(limit));
    return res.json(popular);
});

// GET /api/products/vertical-list
router.get('/products/vertical-list', (req, res) => {
    const { outletId } = req.query;
    return res.json(catalogStore.getPublicProducts({ outletId }));
});

// GET /api/products/:id/customizations
router.get('/products/:id/customizations', (req, res) => {
    const product = catalogStore.loadProducts().find((p) => String(p.id) === String(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.json(product.customizationGroups || product.customizations || []);
});

// GET /api/products/:id
router.get('/products/:id', (req, res) => {
    const { outletId } = req.query;
    const product = catalogStore.loadProducts().find((p) =>
        String(p.id) === String(req.params.id) || String(p.slug) === String(req.params.id)
    );
    if (!product || product.isActive === false) {
        return res.status(404).json({ message: 'Product not found' });
    }

    return res.json({
        ...catalogStore.toPublicProduct(product, outletId),
        addons: product.addons || [],
        customizationGroups: product.customizationGroups || product.customizations || []
    });
});

// GET /api/wallet
router.get('/wallet', authMiddleware, (req, res) => {
    const balance = Number(req.user.balance || req.user.walletBalance || 0);
    return res.json({
        balance,
        walletBalance: balance,
        transactions: req.user.walletTransactions || []
    });
});

// GET /api/wallet/balance
router.get('/wallet/balance', authMiddleware, (req, res) => {
    const balance = Number(req.user.balance || req.user.walletBalance || 0);
    return res.json({ balance, walletBalance: balance });
});

// POST /api/wallet/topup/initialize
router.post('/wallet/topup/initialize', authMiddleware, (req, res) => {
    const amount = Math.round(Number(req.body.amount || 0));
    if (!Number.isFinite(amount) || amount < 100) {
        return res.status(400).json({ message: 'Amount must be at least 100' });
    }
    return res.json({ reference: `local-wallet-${Date.now()}-${req.user.id}` });
});

// POST /api/wallet/topup/verify
router.post('/wallet/topup/verify', authMiddleware, (req, res) => {
    return res.json({ success: true, reference: req.body.reference || null });
});

// GET /api/referrals
router.get('/referrals', authMiddleware, (req, res) => {
    const referralCode = req.user.referralCode || `MGK${String(req.user.id).slice(-6).toUpperCase()}`;
    if (!req.user.referralCode) {
        db.users.update(req.user.id, { referralCode });
    }

    return res.json({
        referralCode,
        referrals: req.user.referrals || []
    });
});

// GET /api/points
router.get('/points', authMiddleware, (req, res) => {
    return res.json({
        balance: Number(req.user.points || 0),
        activities: req.user.pointActivities || []
    });
});

// POST /api/points/redeem
router.post('/points/redeem', authMiddleware, (req, res) => {
    const pointsCost = Number(req.body.pointsCost || req.body.points || 0);
    if (!Number.isFinite(pointsCost) || pointsCost <= 0) {
        return res.status(400).json({ message: 'Invalid points amount' });
    }
    if (Number(req.user.points || 0) < pointsCost) {
        return res.status(400).json({ message: 'Insufficient points' });
    }

    const voucher = {
        id: `voucher-${Date.now()}`,
        voucherCode: `PTS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
        rewardType: req.body.rewardType || 'points_reward',
        redemptionStatus: 'active',
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };
    const vouchers = [...(req.user.vouchers || []), voucher];
    db.users.update(req.user.id, {
        points: Number(req.user.points || 0) - pointsCost,
        vouchers
    });

    return res.json(voucher);
});

// GET /api/spin-win/vouchers
router.get('/spin-win/vouchers', authMiddleware, (req, res) => {
    return res.json(req.user.vouchers || []);
});

// GET /api/popups/outlet/:outletId
router.get('/popups/outlet/:outletId', (req, res) => {
    const popups = loadPopups()
        .filter((p) => p.isActive !== false && catalogStore.popupMatchesOutlet(p, req.params.outletId))
        .map((p) => catalogStore.toPublicPopup(catalogStore.enrichPopup(p)));

    return res.json(popups);
});

// GET /api/campaigns/notifications/:outletId
router.get('/campaigns/notifications/:outletId', (req, res) => {
    return res.json([]);
});

// GET /api/push/vapid-key
router.get('/push/vapid-key', (req, res) => {
    return res.json({ vapidKey: 'BEl625clVD3O9733Dpb65gUt7EC63sfJdf83h2d2H' });
});

// POST /api/push/subscribe
router.post('/push/subscribe', (req, res) => {
    return res.json({ success: true, message: 'Subscribed successfully' });
});

// GET /api/referral-reward-amount
router.get('/referral-reward-amount', (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.referralRewardAmount || { amountInNaira: 500 });
});

module.exports = router;
