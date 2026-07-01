const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Memory store for OTPs (identifier -> otp)
const otpStore = new Map();

// Helper to sign JWT
const signToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'magoka_super_secret_key_12345', { expiresIn: '30d' });
};

// POST /api/auth/check-user
router.post('/auth/check-user', (req, res) => {
    const { identifier } = req.body;
    if (!identifier) {
        return res.status(400).json({ message: 'Identifier is required' });
    }

    const user = db.users.find(u => u.email === identifier || u.phone === identifier);
    if (user) {
        return res.json({ exists: true, user });
    }
    return res.json({ exists: false, user: null });
});

// POST /api/auth/login/send-otp
router.post('/auth/login/send-otp', (req, res) => {
    const { emailOrPhone } = req.body;
    if (!emailOrPhone) {
        return res.status(400).json({ message: 'Email or phone number is required' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(emailOrPhone, otp);

    console.log(`\n========================================`);
    console.log(`🔑 LOGIN OTP for ${emailOrPhone}: ${otp}`);
    console.log(`========================================\n`);

    const isEmail = emailOrPhone.includes('@');
    return res.json({
        message: `OTP sent successfully to ${emailOrPhone}`,
        method: isEmail ? 'email' : 'sms',
        identifier: emailOrPhone
    });
});

// POST /api/auth/login/verify
router.post('/auth/login/verify', (req, res) => {
    const { emailOrPhone, otp } = req.body;
    if (!emailOrPhone || !otp) {
        return res.status(400).json({ message: 'Email or phone and OTP are required' });
    }

    const savedOtp = otpStore.get(emailOrPhone);
    // Allow '123456' as a universal testing OTP in addition to the generated one
    if (otp !== '123456' && otp !== savedOtp) {
        return res.status(400).json({ message: 'Invalid OTP code' });
    }

    otpStore.delete(emailOrPhone); // Clear OTP

    // Find or create user
    let user = db.users.find(u => u.email === emailOrPhone || u.phone === emailOrPhone);
    if (!user) {
        // Auto-register if user doesn't exist
        const isEmail = emailOrPhone.includes('@');
        user = db.users.insert({
            email: isEmail ? emailOrPhone : '',
            phone: !isEmail ? emailOrPhone : '',
            fullName: emailOrPhone.split('@')[0],
            points: 100, // Welcome points
            balance: 0
        });
    }

    const token = signToken(user);
    return res.json({ token, user });
});

// POST /api/auth/register/send-otp
router.post('/auth/register/send-otp', (req, res) => {
    const { email, phone, fullName } = req.body;
    if (!email || !phone) {
        return res.status(400).json({ message: 'Email and phone are required' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, otp);
    otpStore.set(phone, otp);

    console.log(`\n========================================`);
    console.log(`🔑 REGISTRATION OTP for ${fullName} (${email} / ${phone}): ${otp}`);
    console.log(`========================================\n`);

    return res.json({
        message: `OTP sent successfully to your phone/email`,
        identifier: email
    });
});

// POST /api/auth/register/verify
router.post('/auth/register/verify', (req, res) => {
    const { email, phone, fullName, otp } = req.body;
    if (!email || !phone || !otp) {
        return res.status(400).json({ message: 'Missing registration details or OTP' });
    }

    const savedOtp = otpStore.get(email) || otpStore.get(phone);
    if (otp !== '123456' && otp !== savedOtp) {
        return res.status(400).json({ message: 'Invalid OTP code' });
    }

    otpStore.delete(email);
    otpStore.delete(phone);

    // Check if user already exists
    let user = db.users.find(u => u.email === email || u.phone === phone);
    if (!user) {
        user = db.users.insert({
            email,
            phone,
            fullName,
            points: 200, // Welcome bonus points
            balance: 0
        });
    } else {
        // Update user fields
        user = db.users.update(user.id, { email, phone, fullName });
    }

    const token = signToken(user);
    return res.json({ token, user });
});

// GET /api/auth/me
router.get('/auth/me', authMiddleware, (req, res) => {
    return res.json(req.user);
});

// POST /api/auth/google
router.post('/auth/google', (req, res) => {
    const { credential, referralCode } = req.body;
    
    // Mock decode Google payload
    const mockEmail = `google_user_${Math.floor(1000 + Math.random() * 9000)}@gmail.com`;
    
    let user = db.users.find(u => u.email === mockEmail);
    let isNewUser = false;
    if (!user) {
        user = db.users.insert({
            email: mockEmail,
            phone: '',
            fullName: 'Google User',
            points: 150,
            balance: 0
        });
        isNewUser = true;
    }

    const token = signToken(user);
    return res.json({
        token,
        user,
        isNewUser,
        requiresProfileCompletion: !user.phone,
        missingFields: !user.phone ? ['phone'] : []
    });
});

// PUT /api/profile
router.put('/profile', authMiddleware, (req, res) => {
    const updates = req.body;
    
    // Protect read-only or sensitive properties from arbitrary updates
    delete updates.id;
    delete updates.points;
    delete updates.balance;
    delete updates.createdAt;

    const updatedUser = db.users.update(req.user.id, updates);
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Return the updated user and a newly signed token just in case the client needs it
    const token = signToken(updatedUser);
    return res.json({
        ...updatedUser,
        token
    });
});

module.exports = router;
