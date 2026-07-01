const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const FRONTEND_DIR = path.join(__dirname, '../../eatyum.food');
const POPUPS_DATA_FILE = path.join(__dirname, '../../data/popups.json');

// Helper to load popups data
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

// Helper to load static JSON files from the frontend's api folder
const loadFrontendApiFile = (filename, defaultVal = []) => {
    const filePath = path.join(FRONTEND_DIR, 'api', filename);
    if (!fs.existsSync(filePath)) {
        return defaultVal;
    }
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
    } catch (e) {
        console.error(`Error loading frontend API file ${filename}:`, e);
        return defaultVal;
    }
};

// Define products catalog
const mockProducts = [
    // Yum Breakfast (categoryId: 43)
    {
        id: 101,
        brandId: 1,
        name: "Steaming Ramen Breakfast",
        description: "Classic hot ramen served with a soft-boiled egg, fresh scallions, and light soy broth.",
        price: 1500,
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop",
        categoryId: 43,
        isActive: true,
        isPopular: true,
        sortOrder: 1
    },
    {
        id: 102,
        brandId: 1,
        name: "Sunrise Pancake Stack",
        description: "Three fluffy pancakes topped with butter and organic maple syrup.",
        price: 1200,
        imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop",
        categoryId: 43,
        isActive: true,
        isPopular: false,
        sortOrder: 2
    },
    // Yum Meals (categoryId: 3)
    {
        id: 201,
        brandId: 1,
        name: "Gourmet Cheese Burger",
        description: "Juicy prime beef patty, melted sharp cheddar, crisp lettuce, and signature burger sauce.",
        price: 2400,
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
        categoryId: 3,
        isActive: true,
        isPopular: true,
        sortOrder: 1
    },
    {
        id: 202,
        brandId: 1,
        name: "Crispy Chicken Shawarma Wrap",
        description: "Marinated grilled chicken, garlic paste, and pickles wrapped in warm pita bread.",
        price: 1800,
        imageUrl: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop",
        categoryId: 3,
        isActive: true,
        isPopular: true,
        sortOrder: 2
    },
    // Yum Chops (categoryId: 6)
    {
        id: 301,
        brandId: 1,
        name: "Spicy Buffalo Wings",
        description: "6 pieces of crispy chicken wings tossed in fiery buffalo sauce, served with blue cheese dip.",
        price: 2200,
        imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop",
        categoryId: 6,
        isActive: true,
        isPopular: true,
        sortOrder: 1
    },
    // Fries & More (categoryId: 13)
    {
        id: 401,
        brandId: 1,
        name: "Loaded Cheese Fries",
        description: "Golden crispy french fries drenched in rich cheese sauce and spring onions.",
        price: 1300,
        imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop",
        categoryId: 13,
        isActive: true,
        isPopular: false,
        sortOrder: 1
    },
    // Yum Drinks (categoryId: 4)
    {
        id: 501,
        brandId: 1,
        name: "Fresh Orange Juice",
        description: "100% organic freshly squeezed sweet oranges.",
        price: 800,
        imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop",
        categoryId: 4,
        isActive: true,
        isPopular: false,
        sortOrder: 1
    },
    {
        id: 502,
        brandId: 1,
        name: "Iced Caramel Latte",
        description: "Double shot espresso, creamy milk, and rich caramel syrup over ice.",
        price: 1100,
        imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop",
        categoryId: 4,
        isActive: true,
        isPopular: true,
        sortOrder: 2
    },
    // New Product
    {
        id: 601,
        brandId: 1,
        name: "Special Delight Burger",
        description: "Premium beef patty with special sauce, fresh vegetables, and cheese on a toasted bun.",
        price: 2800,
        imageUrl: "/product-image.jpg",
        categoryId: 3,
        isActive: true,
        isPopular: true,
        sortOrder: 3
    }
];

// GET /api/brands/current
router.get('/brands/current', (req, res) => {
    // Return standard brand config
    return res.json({
        id: 1,
        name: "MAGOKA",
        logoUrl: "/magoka-logo.png",
        logoLightUrl: "/magoka-logo.png",
        logoDarkUrl: "/magoka-logo.png",
        colorScheme: "#FFD700",
        buttonColor: "#FF6B00",
        playStoreUrl: "",
        appStoreUrl: "",
        supportEmail: "contact@magoka.food",
        domain: "magoka.food",
        isActive: true,
        isDefault: true,
        hasFreeDelivery: false,
        freeDeliveryMinAmount: "0.00",
        freeDeliveryTagColor: "#10B981"
    });
});

// GET /api/categories
router.get('/categories', (req, res) => {
    const categories = loadFrontendApiFile('categories', []);
    return res.json(categories);
});

// GET /api/homepage-layout
router.get('/homepage-layout', (req, res) => {
    return res.json({ layout: "categories" });
});

// GET /api/banners
router.get('/banners', (req, res) => {
    // Banners file can be very large due to base64 images; we clean and return the valid carousel banner
    const banners = loadFrontendApiFile('banners', []);
    // Limit to the first carousel banner or mock a simple set if empty
    if (banners.length === 0) {
        return res.json([
            {
                id: 10000000,
                brandId: 1,
                title: "Spin the Wheel and Win Big",
                subtitle: "Unlock different gifts and vouchers!",
                imageUrl: "/magoka-logo.png",
                linkUrl: "/spin-win",
                sortOrder: -999,
                isActive: true,
                bannerType: "carousel"
            }
        ]);
    }
    // Filter out huge base64 image data to keep response quick
    const cleanBanners = banners.map(b => {
        if (b.imageUrl && b.imageUrl.startsWith('data:image')) {
            return { ...b, imageUrl: "/magoka-logo.png" };
        }
        return b;
    });
    return res.json(cleanBanners);
});

// GET /api/location/nearest-outlet
router.get('/location/nearest-outlet', (req, res) => {
    return res.json({
        id: 9,
        brandId: 1,
        name: "Main Outlet",
        address: "Akute, Lagos",
        physicalLocationKey: "akute lagos",
        latitude: "6.5244",
        longitude: "3.3792",
        email: "contact@magoka.food",
        phone: "+1234567890",
        openTime: "09:00",
        closeTime: "22:00",
        daysOpen: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        isActive: true,
        isLegacy: false,
        deliveryRadius: 25,
        distance: 0.86
    });
});

// GET /api/outlets
router.get('/outlets', (req, res) => {
    return res.json([
        {
            id: 9,
            brandId: 1,
            name: "Main Outlet",
            address: "Akute, Lagos",
            physicalLocationKey: "akute lagos",
            latitude: "6.5244",
            longitude: "3.3792",
            email: "contact@magoka.food",
            phone: "+1234567890",
            openTime: "09:00",
            closeTime: "22:00",
            daysOpen: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
            isActive: true,
            isLegacy: false,
            deliveryRadius: 25
        }
    ]);
});

// GET /api/products
router.get('/products', (req, res) => {
    const { categoryId, outletId } = req.query;
    let products = mockProducts;
    if (categoryId) {
        products = products.filter(p => p.categoryId === Number(categoryId));
    }
    return res.json(products);
});

// GET /api/products/popular
router.get('/products/popular', (req, res) => {
    const { outletId, limit } = req.query;
    let popular = mockProducts.filter(p => p.isPopular);
    if (limit) {
        popular = popular.slice(0, Number(limit));
    }
    return res.json(popular);
});

// GET /api/products/vertical-list
router.get('/products/vertical-list', (req, res) => {
    const { outletId } = req.query;
    return res.json(mockProducts);
});

// GET /api/popups/outlet/:outletId
router.get('/popups/outlet/:outletId', (req, res) => {
    const popups = loadPopups();
    const { outletId } = req.params;
    const activePopups = popups.filter(p => 
        p.isActive !== false && 
        (p.outletId === Number(outletId) || p.outletId === 'all' || !p.outletId)
    );
    return res.json(activePopups);
});

// GET /api/campaigns/notifications/:outletId
router.get('/campaigns/notifications/:outletId', (req, res) => {
    return res.json([]);
});

// GET /api/push/vapid-key
router.get('/push/vapid-key', (req, res) => {
    return res.json({ vapidKey: "BEl625clVD3O9733Dpb65gUt7EC63sfJdf83h2d2H" });
});

// POST /api/push/subscribe
router.post('/push/subscribe', (req, res) => {
    return res.json({ success: true, message: "Subscribed successfully" });
});

// GET /api/referral-reward-amount
router.get('/referral-reward-amount', (req, res) => {
    return res.json({ amount: 500 });
});

module.exports = router;
