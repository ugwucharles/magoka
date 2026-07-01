const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to get filepath
const getFilePath = (filename) => path.join(DATA_DIR, filename);

// Load JSON data safely
const loadData = (filename, defaultVal = []) => {
    const filePath = getFilePath(filename);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(defaultVal, null, 2), 'utf8');
        return defaultVal;
    }
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content || JSON.stringify(defaultVal));
    } catch (e) {
        console.error(`Error reading ${filename}, resetting to default.`, e);
        return defaultVal;
    }
};

// Save JSON data
const saveData = (filename, data) => {
    const filePath = getFilePath(filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Initialize file tables
const db = {
    users: {
        all: () => loadData('users.json'),
        save: (users) => saveData('users.json', users),
        find: (predicate) => loadData('users.json').find(predicate),
        insert: (user) => {
            const users = loadData('users.json');
            const newUser = {
                id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
                createdAt: new Date().toISOString(),
                points: 0,
                balance: 0,
                ...user
            };
            users.push(newUser);
            saveData('users.json', users);
            return newUser;
        },
        update: (id, updates) => {
            const users = loadData('users.json');
            const idx = users.findIndex(u => u.id === id);
            if (idx !== -1) {
                users[idx] = { ...users[idx], ...updates, updatedAt: new Date().toISOString() };
                saveData('users.json', users);
                return users[idx];
            }
            return null;
        }
    },
    carts: {
        get: (userId) => {
            const carts = loadData('carts.json', {});
            return carts[userId] || [];
        },
        set: (userId, items) => {
            const carts = loadData('carts.json', {});
            carts[userId] = items;
            saveData('carts.json', carts);
            return items;
        }
    },
    orders: {
        all: () => loadData('orders.json'),
        findByUser: (userId) => loadData('orders.json').filter(o => o.userId === userId),
        insert: (order) => {
            const orders = loadData('orders.json');
            const newOrder = {
                id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
                orderNumber: 'MGK-' + Math.floor(100000 + Math.random() * 900000),
                createdAt: new Date().toISOString(),
                status: 'pending',
                ...order
            };
            orders.unshift(newOrder); // Newest orders first
            saveData('orders.json', orders);
            return newOrder;
        }
    }
};

module.exports = db;
