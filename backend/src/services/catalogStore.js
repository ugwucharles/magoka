const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../data');
const FRONTEND_DIR = path.resolve(__dirname, '../../../eatyum.food');

const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const loadJson = (filename, defaultVal) => {
    ensureDir(DATA_DIR);
    const filePath = path.join(DATA_DIR, filename);
    // In Vercel serverless, also check /tmp for recent writes
    const tmpPath = path.join('/tmp', filename);
    if (fs.existsSync(tmpPath)) {
        try {
            return JSON.parse(fs.readFileSync(tmpPath, 'utf8'));
        } catch (e) {
            console.error(`Error reading ${filename} from /tmp:`, e);
        }
    }
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(defaultVal, null, 2));
        return defaultVal;
    }
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
        console.error(`Error reading ${filename}:`, e);
        return defaultVal;
    }
};

const saveJson = (filename, data) => {
    ensureDir(DATA_DIR);
    const filePath = path.join(DATA_DIR, filename);
    // In Vercel serverless environment, use /tmp for writable storage
    const tmpPath = path.join('/tmp', filename);
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        // Also write to /tmp for serverless compatibility
        fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(`Error writing ${filename}:`, e);
        // Fallback to /tmp only
        fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2));
    }
};

const slugify = (name) =>
    String(name || '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

const DEFAULT_BRAND = {
    id: 1,
    name: 'MAGOKA',
    logoUrl: '/magoka-logo.png',
    logoLightUrl: '/magoka-logo.png',
    logoDarkUrl: '/magoka-logo.png',
    colorScheme: '#FFD700',
    buttonColor: '#FF6B00',
    playStoreUrl: '',
    appStoreUrl: '',
    supportEmail: 'contact@magoka.food',
    domain: 'magoka.food',
    isActive: true,
    isDefault: true,
    hasFreeDelivery: false,
    freeDeliveryMinAmount: '0.00',
    freeDeliveryTagColor: '#10B981'
};

const DEFAULT_OUTLET = {
    id: 9,
    brandId: 1,
    name: 'Main Outlet',
    address: 'Akute, Lagos',
    physicalLocationKey: 'akute lagos',
    latitude: '6.5244',
    longitude: '3.3792',
    email: 'contact@magoka.food',
    phone: '+1234567890',
    openTime: '09:00',
    closeTime: '22:00',
    daysOpen: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    isActive: true,
    isLegacy: false,
    deliveryRadius: 25
};

const SEED_PRODUCTS = [
    { id: 101, brandId: 1, name: 'Steaming Ramen Breakfast', description: 'Classic hot ramen served with a soft-boiled egg, fresh scallions, and light soy broth.', basePrice: '1500', slug: 'steaming-ramen-breakfast', imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop', categoryId: 43, categoryIds: [43], outletIds: [9], isActive: true, isPopular: true, sortOrder: 1, preparationTime: 15, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 102, brandId: 1, name: 'Sunrise Pancake Stack', description: 'Three fluffy pancakes topped with butter and organic maple syrup.', basePrice: '1200', slug: 'sunrise-pancake-stack', imageUrl: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop', categoryId: 43, categoryIds: [43], outletIds: [9], isActive: true, isPopular: false, sortOrder: 2, preparationTime: 15, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 201, brandId: 1, name: 'Gourmet Cheese Burger', description: 'Juicy prime beef patty, melted sharp cheddar, crisp lettuce, and signature burger sauce.', basePrice: '2400', slug: 'gourmet-cheese-burger', imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', categoryId: 3, categoryIds: [3], outletIds: [9], isActive: true, isPopular: true, sortOrder: 1, preparationTime: 15, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 202, brandId: 1, name: 'Crispy Chicken Shawarma Wrap', description: 'Marinated grilled chicken, garlic paste, and pickles wrapped in warm pita bread.', basePrice: '1800', slug: 'crispy-chicken-shawarma-wrap', imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop', categoryId: 3, categoryIds: [3], outletIds: [9], isActive: true, isPopular: true, sortOrder: 2, preparationTime: 15, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 301, brandId: 1, name: 'Spicy Buffalo Wings', description: '6 pieces of crispy chicken wings tossed in fiery buffalo sauce, served with blue cheese dip.', basePrice: '2200', slug: 'spicy-buffalo-wings', imageUrl: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop', categoryId: 6, categoryIds: [6], outletIds: [9], isActive: true, isPopular: true, sortOrder: 1, preparationTime: 15, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 401, brandId: 1, name: 'Loaded Cheese Fries', description: 'Golden crispy french fries drenched in rich cheese sauce and spring onions.', basePrice: '1300', slug: 'loaded-cheese-fries', imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop', categoryId: 13, categoryIds: [13], outletIds: [9], isActive: true, isPopular: false, sortOrder: 1, preparationTime: 15, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 501, brandId: 1, name: 'Fresh Orange Juice', description: '100% organic freshly squeezed sweet oranges.', basePrice: '800', slug: 'fresh-orange-juice', imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop', categoryId: 4, categoryIds: [4], outletIds: [9], isActive: true, isPopular: false, sortOrder: 1, preparationTime: 5, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 502, brandId: 1, name: 'Iced Caramel Latte', description: 'Double shot espresso, creamy milk, and rich caramel syrup over ice.', basePrice: '1100', slug: 'iced-caramel-latte', imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop', categoryId: 4, categoryIds: [4], outletIds: [9], isActive: true, isPopular: true, sortOrder: 2, preparationTime: 5, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] },
    { id: 601, brandId: 1, name: 'Special Delight Burger', description: 'Premium beef patty with special sauce, fresh vegetables, and cheese on a toasted bun.', basePrice: '2800', slug: 'special-delight-burger', imageUrl: '/product-image.jpg', categoryId: 3, categoryIds: [3], outletIds: [9], isActive: true, isPopular: true, sortOrder: 3, preparationTime: 15, orderAvailabilityMode: 'both', preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] }
].map((p) => ({
    ...p,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
}));

const DEFAULT_SETTINGS = {
    popularItemsSortBy: { sortBy: 'default' },
    homepageLayout: { layout: 'categories' },
    referralRewardAmount: { amountInNaira: 500 },
    payoutCap: { valueNaira: 0 },
    chowdeck: { enabled: false },
    paystackWebhook: {
        publicBaseUrl: '',
        liveWebhookUrl: '',
        forwardUrl: '',
        payoutAliasUrl: '',
        legacyPayoutAliasUrl: '',
        defaults: {
            publicBaseUrl: '',
            liveWebhookUrl: '',
            forwardUrl: ''
        },
        config: {
            publicBaseUrlOverride: '',
            liveWebhookUrlOverride: '',
            forwardUrlOverride: ''
        }
    },
    salesChannels: {
        channels: [
            { value: 'web', label: 'Website', isActive: true, sortOrder: 0 },
            { value: 'mobile', label: 'Mobile App', isActive: true, sortOrder: 1 }
        ]
    },
    notificationPreferences: {
        soundEnabled: true,
        desktopEnabled: true
    }
};

const loadFrontendApiFile = (filename, defaultVal = []) => {
    const filePath = path.join(FRONTEND_DIR, 'api', filename);
    if (!fs.existsSync(filePath)) return defaultVal;
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
        console.error(`Error loading frontend API file ${filename}:`, e);
        return defaultVal;
    }
};

const toPublicProduct = (product, outletId = null) => ({
    id: product.id,
    brandId: product.brandId,
    name: product.name,
    description: product.description,
    basePrice: product.basePrice || String(product.price || 0),
    price: Number(product.basePrice || product.price || 0),
    imageUrl: product.imageUrl || '',
    categoryId: product.categoryId,
    isActive: product.isActive !== false,
    isPopular: !!product.isPopular,
    sortOrder: product.sortOrder || 0,
    preparationTime: product.preparationTime || 15,
    orderAvailabilityMode: product.orderAvailabilityMode || 'both',
    preorderLeadTimeHours: product.preorderLeadTimeHours || null,
    bulkServingOptions: product.bulkServingOptions || [],
    productSalesChannels: product.productSalesChannels || [],
    channelPrices: product.channelPrices || [],
    isGiftBox: product.isGiftBox || false,
    effectiveOrderAvailabilityMode: product.effectiveOrderAvailabilityMode || product.orderAvailabilityMode || 'both',
    availability: {
        isAvailable: true,
        outOfStock: false,
        priceOverride: null,
        outletId: outletId ? Number(outletId) : 9
    }
});

const normalizeProductInput = (body, existing = null) => {
    const categoryIds = body.categoryIds || (body.categoryId ? [body.categoryId] : existing?.categoryIds || []);
    const categoryId = body.categoryId || categoryIds[0] || existing?.categoryId || null;
    const name = body.name || existing?.name || '';
    return {
        ...(existing || {}),
        ...body,
        name,
        description: body.description ?? existing?.description ?? '',
        basePrice: String(body.basePrice ?? existing?.basePrice ?? '0'),
        slug: body.slug || existing?.slug || slugify(name),
        imageUrl: body.imageUrl ?? existing?.imageUrl ?? '',
        categoryId,
        categoryIds,
        outletIds: body.outletIds ?? existing?.outletIds ?? [DEFAULT_OUTLET.id],
        isActive: body.isActive !== undefined ? body.isActive : (existing?.isActive !== false),
        isPopular: body.isPopular !== undefined ? body.isPopular : !!existing?.isPopular,
        sortOrder: body.sortOrder ?? existing?.sortOrder ?? 0,
        preparationTime: body.preparationTime ?? existing?.preparationTime ?? 15,
        orderAvailabilityMode: body.orderAvailabilityMode ?? existing?.orderAvailabilityMode ?? 'both',
        preorderLeadTimeHours: body.preorderLeadTimeHours ?? existing?.preorderLeadTimeHours ?? null,
        bulkServingOptions: body.bulkServingOptions ?? existing?.bulkServingOptions ?? [],
        productSalesChannels: body.productSalesChannels ?? existing?.productSalesChannels ?? [],
        channelPrices: body.channelPrices ?? existing?.channelPrices ?? [],
        updatedAt: new Date().toISOString()
    };
};

const catalogStore = {
    FRONTEND_DIR,

    loadBrands() {
        return loadJson('brands.json', [DEFAULT_BRAND]);
    },

    saveBrands(brands) {
        saveJson('brands.json', brands);
    },

    loadOutlets() {
        return loadJson('outlets.json', [DEFAULT_OUTLET]);
    },

    saveOutlets(outlets) {
        saveJson('outlets.json', outlets);
    },

    loadProducts() {
        return loadJson('products.json', SEED_PRODUCTS);
    },

    saveProducts(products) {
        saveJson('products.json', products);
    },

    loadBanners() {
        const existing = loadJson('banners.json', null);
        if (existing && existing.length) return existing;
        const fromFrontend = loadFrontendApiFile('banners', []);
        const cleaned = fromFrontend.map((b) => ({
            ...b,
            imageUrl: b.imageUrl && b.imageUrl.startsWith('data:image') ? '/magoka-logo.png' : (b.imageUrl || '/magoka-logo.png')
        }));
        if (cleaned.length) {
            saveJson('banners.json', cleaned);
            return cleaned;
        }
        const fallback = [{
            id: 10000000,
            brandId: 1,
            title: 'Spin the Wheel and Win Big',
            subtitle: 'Unlock different gifts and vouchers!',
            imageUrl: '/magoka-logo.png',
            linkUrl: '/spin-win',
            sortOrder: -999,
            isActive: true,
            bannerType: 'carousel'
        }];
        saveJson('banners.json', fallback);
        return fallback;
    },

    saveBanners(banners) {
        saveJson('banners.json', banners);
    },

    loadSettings() {
        return loadJson('settings.json', DEFAULT_SETTINGS);
    },

    saveSettings(settings) {
        saveJson('settings.json', settings);
    },

    loadCategories() {
        return loadJson('categories.json', loadFrontendApiFile('categories', []));
    },

    saveCategories(categories) {
        saveJson('categories.json', categories);
    },

    getPublicProducts(filters = {}) {
        let products = this.loadProducts().filter((p) => p.isActive !== false);
        if (filters.brandId) {
            products = products.filter((p) => p.brandId === Number(filters.brandId));
        }
        if (filters.categoryId) {
            products = products.filter((p) => p.categoryId === Number(filters.categoryId));
        }
        if (filters.outletId) {
            products = products.filter((p) => !p.outletIds || p.outletIds.length === 0 || p.outletIds.includes(Number(filters.outletId)));
        }
        return products.map(p => toPublicProduct(p, filters.outletId)).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
    },

    getAdminProducts({ brandId, includeInactive = false } = {}) {
        let products = this.loadProducts();
        if (brandId) products = products.filter((p) => p.brandId === Number(brandId));
        const showInactive = includeInactive === true || includeInactive === 'true';
        if (!showInactive) {
            products = products.filter((p) => p.isActive !== false);
        }
        return products.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
    },

    createProduct(body) {
        const products = this.loadProducts();
        const nextId = products.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1;
        const product = normalizeProductInput(body, null);
        product.id = nextId;
        product.createdAt = new Date().toISOString();
        products.push(product);
        this.saveProducts(products);
        return product;
    },

    updateProduct(id, body) {
        const products = this.loadProducts();
        const index = products.findIndex((p) => String(p.id) === String(id));
        if (index === -1) return null;
        products[index] = normalizeProductInput(body, products[index]);
        this.saveProducts(products);
        return products[index];
    },

    deleteProduct(id) {
        const products = this.loadProducts();
        const index = products.findIndex((p) => String(p.id) === String(id));
        if (index === -1) return false;
        products.splice(index, 1);
        this.saveProducts(products);
        return true;
    },

    enrichPopup(popup) {
        const outlets = this.loadOutlets();
        const outletIds = popup.outletIds?.length
            ? popup.outletIds
            : popup.outletId === 'all' || !popup.outletId
                ? []
                : [Number(popup.outletId)];

        const mappedOutlets = outletIds.length === 0
            ? [{ id: 'all', name: 'All Outlets' }]
            : outletIds.map((id) => outlets.find((o) => o.id === id)).filter(Boolean);

        return {
            ...popup,
            linkRoute: popup.linkRoute || popup.ctaLink || '',
            ctaLink: popup.ctaLink || popup.linkRoute || '',
            outletIds,
            outlets: mappedOutlets
        };
    },

    toPublicPopup(popup) {
        return {
            id: popup.id,
            title: popup.title,
            imageUrl: popup.imageUrl,
            linkRoute: popup.linkRoute || popup.ctaLink || '',
            isActive: popup.isActive !== false
        };
    },

    popupMatchesOutlet(popup, outletId) {
        const outletIds = popup.outletIds?.length
            ? popup.outletIds
            : popup.outletId === 'all' || !popup.outletId
                ? []
                : [Number(popup.outletId)];

        if (!outletIds.length) return true;
        return outletIds.includes(Number(outletId));
    },

    slugify,
    toPublicProduct,
    DEFAULT_SETTINGS
};

module.exports = catalogStore;
