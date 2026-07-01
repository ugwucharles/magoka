require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const authRouter = require('./src/routes/auth');
const coreRouter = require('./src/routes/core');
const ordersRouter = require('./src/routes/orders');
const { router: adminRouter } = require('./src/routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString().split('T')[1].slice(0, 8)}] ${req.method} ${req.url}`);
    next();
});

// API Routes
app.use('/api', adminRouter);
app.use('/api', authRouter);
app.use('/api', coreRouter);
app.use('/api', ordersRouter);

// Fallback/Mock handlers for unhandled API routes
// This prevents frontend crashes on unhandled admin/integrations endpoints
app.use('/api/*', (req, res) => {
    console.warn(`⚠️  MOCK FALLBACK: Unhandled API route ${req.method} ${req.originalUrl}`);
    
    // Return appropriate mock data based on the route
    if (req.originalUrl.includes('/admin/')) {
        return res.json([]);
    }
    
    return res.status(200).json({
        success: true,
        message: "Fallback mock response",
        data: []
    });
});

// Serve frontend static files
const frontendPath = path.resolve(__dirname, process.env.FRONTEND_PATH || '../eatyum.food');
app.use(express.static(frontendPath));

// Catch-all to serve frontend index.html for Single Page App (SPA) routing
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 MAGOKA Backend Server successfully started!`);
    console.log(`📡 Local Access: http://localhost:${PORT}`);
    console.log(`📂 Serving Frontend from: ${frontendPath}\n`);
});
