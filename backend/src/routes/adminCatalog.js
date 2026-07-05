const express = require('express');
const path = require('path');
const fs = require('fs');
const catalogStore = require('../services/catalogStore');
const { adminAuthMiddleware } = require('./admin');

const router = express.Router();

const UPLOADS_DIR = path.join(__dirname, '../../uploads');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const parseImageUpload = (req) => new Promise((resolve, reject) => {
    const contentType = req.headers['content-type'] || '';
    const boundaryMatch = contentType.match(/boundary=(.+)$/i);
    if (!boundaryMatch) {
        reject(new Error('Invalid multipart request'));
        return;
    }

    const boundary = boundaryMatch[1];
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('error', reject);
    req.on('end', () => {
        const body = Buffer.concat(chunks);
        const parts = body.toString('binary').split(`--${boundary}`);

        for (const part of parts) {
            if (!part.includes('filename=')) continue;

            const filenameMatch = part.match(/filename="([^"]+)"/i);
            const typeMatch = part.match(/Content-Type:\s*([^\r\n]+)/i);
            const headerEnd = part.indexOf('\r\n\r\n');
            if (headerEnd === -1) continue;

            let fileData = part.slice(headerEnd + 4);
            fileData = fileData.replace(/\r\n--$/, '').replace(/\r\n$/, '');

            const buffer = Buffer.from(fileData, 'binary');
            const mimetype = (typeMatch?.[1] || 'application/octet-stream').trim();

            if (!mimetype.startsWith('image/')) {
                reject(new Error('Only image files are allowed'));
                return;
            }

            if (buffer.length > 5 * 1024 * 1024) {
                reject(new Error('File size must be less than 5MB'));
                return;
            }

            resolve({
                originalname: filenameMatch?.[1] || 'upload.jpg',
                mimetype,
                buffer
            });
            return;
        }

        reject(new Error('No image file provided'));
    });
});

// --- Brands ---

router.get('/admin/brands', adminAuthMiddleware, (req, res) => {
    return res.json(catalogStore.loadBrands());
});

router.post('/admin/brands', adminAuthMiddleware, (req, res) => {
    const brands = catalogStore.loadBrands();
    const nextId = brands.reduce((max, b) => Math.max(max, Number(b.id) || 0), 0) + 1;
    const brand = { ...req.body, id: nextId, isActive: req.body.isActive !== false };
    brands.push(brand);
    catalogStore.saveBrands(brands);
    return res.json(brand);
});

router.put('/admin/brands/:id', adminAuthMiddleware, (req, res) => {
    const brands = catalogStore.loadBrands();
    const index = brands.findIndex((b) => String(b.id) === String(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Brand not found' });
    brands[index] = { ...brands[index], ...req.body, id: brands[index].id };
    catalogStore.saveBrands(brands);
    return res.json(brands[index]);
});

// --- Outlets ---

router.get('/admin/outlets', adminAuthMiddleware, (req, res) => {
    const { brandId } = req.query;
    let outlets = catalogStore.loadOutlets();
    if (brandId) outlets = outlets.filter((o) => o.brandId === Number(brandId));
    return res.json(outlets);
});

router.post('/admin/outlets', adminAuthMiddleware, (req, res) => {
    const outlets = catalogStore.loadOutlets();
    const nextId = outlets.reduce((max, o) => Math.max(max, Number(o.id) || 0), 0) + 1;
    const outlet = { ...req.body, id: nextId, isActive: req.body.isActive !== false };
    outlets.push(outlet);
    catalogStore.saveOutlets(outlets);
    return res.json(outlet);
});

router.put('/admin/outlets/:id', adminAuthMiddleware, (req, res) => {
    const outlets = catalogStore.loadOutlets();
    const index = outlets.findIndex((o) => String(o.id) === String(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Outlet not found' });
    outlets[index] = { ...outlets[index], ...req.body, id: outlets[index].id };
    catalogStore.saveOutlets(outlets);
    return res.json(outlets[index]);
});

router.delete('/admin/outlets/:id', adminAuthMiddleware, (req, res) => {
    const outlets = catalogStore.loadOutlets();
    const index = outlets.findIndex((o) => String(o.id) === String(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Outlet not found' });
    outlets.splice(index, 1);
    catalogStore.saveOutlets(outlets);
    return res.json({ message: 'Outlet deleted successfully' });
});

// --- Categories ---

router.get('/admin/categories', adminAuthMiddleware, (req, res) => {
    const { brandId } = req.query;
    let categories = catalogStore.loadCategories();
    if (brandId) categories = categories.filter((c) => c.brandId === Number(brandId));
    return res.json(categories);
});

router.post('/admin/categories', adminAuthMiddleware, (req, res) => {
    const categories = catalogStore.loadCategories();
    const nextId = categories.reduce((max, c) => Math.max(max, Number(c.id) || 0), 0) + 1;
    const category = {
        ...req.body,
        id: nextId,
        slug: req.body.slug || catalogStore.slugify(req.body.name),
        isActive: req.body.isActive !== false
    };
    categories.push(category);
    const filePath = path.join(catalogStore.FRONTEND_DIR, 'api', 'categories');
    fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
    return res.json(category);
});

router.put('/admin/categories/:id', adminAuthMiddleware, (req, res) => {
    const categories = catalogStore.loadCategories();
    const index = categories.findIndex((c) => String(c.id) === String(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Category not found' });
    categories[index] = { ...categories[index], ...req.body, id: categories[index].id };
    const filePath = path.join(catalogStore.FRONTEND_DIR, 'api', 'categories');
    fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
    return res.json(categories[index]);
});

router.delete('/admin/categories/:id', adminAuthMiddleware, (req, res) => {
    const categories = catalogStore.loadCategories();
    const index = categories.findIndex((c) => String(c.id) === String(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Category not found' });
    categories.splice(index, 1);
    const filePath = path.join(catalogStore.FRONTEND_DIR, 'api', 'categories');
    fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
    return res.json({ message: 'Category deleted successfully' });
});

// --- Products ---

router.get('/admin/products', adminAuthMiddleware, (req, res) => {
    const { brandId, includeInactive } = req.query;
    return res.json(catalogStore.getAdminProducts({ brandId, includeInactive }));
});

router.get('/admin/products/export', adminAuthMiddleware, (req, res) => {
    const products = catalogStore.getAdminProducts({ brandId: req.query.brandId, includeInactive: true });
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="products.json"');
    return res.send(JSON.stringify(products, null, 2));
});

router.get('/admin/products/:id/details', adminAuthMiddleware, (req, res) => {
    const product = catalogStore.loadProducts().find((p) => String(p.id) === String(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.json(product);
});

router.get('/admin/products/:id', adminAuthMiddleware, (req, res) => {
    const product = catalogStore.loadProducts().find((p) => String(p.id) === String(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.json(product);
});

router.post('/admin/products', adminAuthMiddleware, (req, res) => {
    if (!req.body.name) return res.status(400).json({ message: 'Product name is required' });
    const product = catalogStore.createProduct(req.body);
    return res.json(product);
});

router.put('/admin/products/:id', adminAuthMiddleware, (req, res) => {
    const product = catalogStore.updateProduct(req.params.id, req.body);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.json(product);
});

router.delete('/admin/products/:id', adminAuthMiddleware, (req, res) => {
    const deleted = catalogStore.deleteProduct(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    return res.json({ message: 'Product deleted successfully' });
});

// --- Banners ---

router.get('/admin/banners', adminAuthMiddleware, (req, res) => {
    const { brandId } = req.query;
    let banners = catalogStore.loadBanners();
    if (brandId) banners = banners.filter((b) => b.brandId === Number(brandId));
    return res.json(banners);
});

router.post('/admin/banners', adminAuthMiddleware, (req, res) => {
    const banners = catalogStore.loadBanners();
    const nextId = banners.reduce((max, b) => Math.max(max, Number(b.id) || 0), 0) + 1;
    const banner = { ...req.body, id: nextId, isActive: req.body.isActive !== false };
    banners.push(banner);
    catalogStore.saveBanners(banners);
    return res.json(banner);
});

router.put('/admin/banners/:id', adminAuthMiddleware, (req, res) => {
    const banners = catalogStore.loadBanners();
    const index = banners.findIndex((b) => String(b.id) === String(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Banner not found' });
    banners[index] = { ...banners[index], ...req.body, id: banners[index].id };
    catalogStore.saveBanners(banners);
    return res.json(banners[index]);
});

router.delete('/admin/banners/:id', adminAuthMiddleware, (req, res) => {
    const banners = catalogStore.loadBanners();
    const index = banners.findIndex((b) => String(b.id) === String(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Banner not found' });
    banners.splice(index, 1);
    catalogStore.saveBanners(banners);
    return res.json({ message: 'Banner deleted successfully' });
});

// --- Upload ---

router.post('/admin/upload', adminAuthMiddleware, async (req, res) => {
    try {
        const file = await parseImageUpload(req);
        const folder = String(req.query.folder || 'products').replace(/[^a-z0-9-_]/gi, '');
        const dest = path.join(UPLOADS_DIR, folder);
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

        const ext = path.extname(file.originalname || '').toLowerCase() || '.jpg';
        const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
        fs.writeFileSync(path.join(dest, filename), file.buffer);

        return res.json({
            success: true,
            url: `/uploads/${folder}/${filename}`,
            provider: 'local-fallback'
        });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message || 'Upload failed' });
    }
});

// --- Settings ---

router.get('/admin/settings/sales-channels', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.salesChannels || catalogStore.DEFAULT_SETTINGS.salesChannels);
});

router.put('/admin/settings/sales-channels', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    settings.salesChannels = { channels: req.body.channels || [] };
    catalogStore.saveSettings(settings);
    return res.json(settings.salesChannels);
});

router.get('/admin/settings/payout-cap', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.payoutCap || { valueNaira: 0 });
});

router.put('/admin/settings/payout-cap', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    settings.payoutCap = { valueNaira: Number(req.body.valueNaira || 0) };
    catalogStore.saveSettings(settings);
    return res.json(settings.payoutCap);
});

router.get('/admin/settings/chowdeck', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.chowdeck || { enabled: false });
});

router.put('/admin/settings/chowdeck', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    settings.chowdeck = { enabled: !!req.body.enabled };
    catalogStore.saveSettings(settings);
    return res.json(settings.chowdeck);
});

router.get('/admin/settings/paystack-webhook', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.paystackWebhook || catalogStore.DEFAULT_SETTINGS.paystackWebhook);
});

router.put('/admin/settings/paystack-webhook', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    settings.paystackWebhook = {
        ...(settings.paystackWebhook || catalogStore.DEFAULT_SETTINGS.paystackWebhook),
        config: {
            ...(settings.paystackWebhook?.config || {}),
            ...req.body
        }
    };
    catalogStore.saveSettings(settings);
    return res.json(settings.paystackWebhook);
});

router.get('/admin/notification-preferences', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    return res.json(settings.notificationPreferences || catalogStore.DEFAULT_SETTINGS.notificationPreferences);
});

router.put('/admin/popular-items-sort-by', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    settings.popularItemsSortBy = { sortBy: req.body.sortBy || 'default' };
    catalogStore.saveSettings(settings);
    return res.json(settings.popularItemsSortBy);
});

router.put('/admin/homepage-layout', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    settings.homepageLayout = { layout: req.body.layout || 'categories' };
    catalogStore.saveSettings(settings);
    return res.json(settings.homepageLayout);
});

router.put('/admin/referral-reward-amount', adminAuthMiddleware, (req, res) => {
    const settings = catalogStore.loadSettings();
    settings.referralRewardAmount = { amountInNaira: Number(req.body.amountInNaira || 0) };
    catalogStore.saveSettings(settings);
    return res.json(settings.referralRewardAmount);
});

module.exports = router;
