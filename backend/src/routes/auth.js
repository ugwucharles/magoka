const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const signToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'magoka_super_secret_key_12345', { expiresIn: '30d' });
};

const formatUser = (user) => {
    const { passwordHash, ...safeUser } = user;
    return {
        ...safeUser,
        emailVerified: true,
        phoneVerified: !!user.phone
    };
};

const findUserByIdentifier = (identifier) => {
    const trimmed = identifier.trim();
    const normalized = trimmed.toLowerCase();
    return db.users.find(u =>
        (u.email && u.email.toLowerCase() === normalized) ||
        (u.phone && u.phone === trimmed)
    );
};

// POST /api/auth/check-user
router.post('/auth/check-user', (req, res) => {
    const { identifier } = req.body;
    if (!identifier) {
        return res.status(400).json({ message: 'Identifier is required' });
    }

    const user = findUserByIdentifier(identifier);
    if (user) {
        return res.json({ exists: true, user: formatUser(user) });
    }
    return res.json({ exists: false, user: null });
});

// POST /api/auth/login/send-otp — instant login (no OTP verification)
router.post('/auth/login/send-otp', (req, res) => {
    const { emailOrPhone, password } = req.body;
    if (!emailOrPhone) {
        return res.status(400).json({ message: 'Email or phone number is required' });
    }

    const trimmed = emailOrPhone.trim();
    const isEmail = trimmed.includes('@');
    const identifier = isEmail ? trimmed.toLowerCase() : trimmed;

    let user = findUserByIdentifier(identifier);

    if (!user) {
        if (isEmail) {
            if (!password) {
                return res.status(400).json({ message: 'Password is required' });
            }
            user = db.users.insert({
                email: identifier,
                phone: '',
                fullName: identifier.split('@')[0],
                emailVerified: true,
                phoneVerified: false,
                passwordHash: bcrypt.hashSync(password, 10),
                points: 100,
                balance: 0
            });
        } else {
            return res.status(404).json({ message: 'No account found. Please sign up with your email first.' });
        }
    }

    if (isEmail) {
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }
        if (user.passwordHash && !bcrypt.compareSync(password, user.passwordHash)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (!user.passwordHash) {
            user = db.users.update(user.id, { passwordHash: bcrypt.hashSync(password, 10) }) || user;
        }
    }

    const token = signToken(user);
    return res.json({
        message: 'Login successful',
        method: isEmail ? 'email' : 'sms',
        identifier,
        token,
        user: formatUser(user)
    });
});

// POST /api/auth/login/verify — kept for backwards compatibility, skips OTP
router.post('/auth/login/verify', (req, res) => {
    const { emailOrPhone } = req.body;
    if (!emailOrPhone) {
        return res.status(400).json({ message: 'Email or phone is required' });
    }

    const trimmed = emailOrPhone.trim();
    const isEmail = trimmed.includes('@');
    const identifier = isEmail ? trimmed.toLowerCase() : trimmed;

    let user = findUserByIdentifier(identifier);
    if (!user) {
        if (isEmail) {
            user = db.users.insert({
                email: identifier,
                phone: '',
                fullName: identifier.split('@')[0],
                emailVerified: true,
                phoneVerified: false,
                points: 100,
                balance: 0
            });
        } else {
            return res.status(404).json({ message: 'No account found. Please sign up first.' });
        }
    }

    const token = signToken(user);
    return res.json({ token, user: formatUser(user) });
});

// POST /api/auth/register/send-otp — instant signup (no OTP verification)
router.post('/auth/register/send-otp', (req, res) => {
    const { email, phone, fullName, referralCode, password } = req.body;
    if (!email || !fullName || !password) {
        return res.status(400).json({ message: 'Email, full name, and password are required' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPhone = phone ? phone.trim() : '';

    const existing = db.users.find(u =>
        u.email === normalizedEmail || (normalizedPhone && u.phone === normalizedPhone)
    );
    if (existing) {
        if (existing.passwordHash && !bcrypt.compareSync(password, existing.passwordHash)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (!existing.passwordHash) {
            db.users.update(existing.id, { passwordHash: bcrypt.hashSync(password, 10) });
        }
        const token = signToken(existing);
        return res.json({
            message: 'Account already exists — logged you in',
            identifier: normalizedEmail,
            token,
            user: formatUser(existing)
        });
    }

    const user = db.users.insert({
        email: normalizedEmail,
        phone: normalizedPhone,
        fullName: fullName.trim(),
        emailVerified: true,
        phoneVerified: !!normalizedPhone,
        referralCode: referralCode || null,
        passwordHash: bcrypt.hashSync(password, 10),
        points: 200,
        balance: 0
    });

    const token = signToken(user);
    return res.json({
        message: 'Account created successfully',
        identifier: normalizedEmail,
        token,
        user: formatUser(user)
    });
});

// POST /api/auth/register/verify — kept for backwards compatibility, skips OTP
router.post('/auth/register/verify', (req, res) => {
    const { email, phone, fullName } = req.body;
    if (!email || !fullName) {
        return res.status(400).json({ message: 'Email and full name are required' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPhone = phone ? phone.trim() : '';

    let user = db.users.find(u => u.email === normalizedEmail || (normalizedPhone && u.phone === normalizedPhone));
    if (!user) {
        user = db.users.insert({
            email: normalizedEmail,
            phone: normalizedPhone,
            fullName: fullName.trim(),
            emailVerified: true,
            phoneVerified: !!normalizedPhone,
            points: 200,
            balance: 0
        });
    } else {
        user = db.users.update(user.id, {
            email: normalizedEmail,
            phone: normalizedPhone,
            fullName: fullName.trim(),
            emailVerified: true,
            phoneVerified: !!normalizedPhone
        });
    }

    const token = signToken(user);
    return res.json({ token, user: formatUser(user) });
});

// GET /api/auth/me
router.get('/auth/me', authMiddleware, (req, res) => {
    return res.json(formatUser(req.user));
});

// POST /api/auth/google
router.post('/auth/google', (req, res) => {
    const { credential } = req.body;

    let email = '';
    let name = 'Google User';
    let picture = '';

    if (credential) {
        try {
            const payload = JSON.parse(Buffer.from(credential.split('.')[1], 'base64').toString());
            email = (payload.email || '').toLowerCase();
            name = payload.name || payload.given_name || 'Google User';
            picture = payload.picture || '';
        } catch (e) {
            return res.status(400).json({ message: 'Invalid Google credential' });
        }
    }

    if (!email) {
        return res.status(400).json({ message: 'Google account did not provide an email address' });
    }

    let user = db.users.find(u => u.email === email);
    let isNewUser = false;
    if (!user) {
        user = db.users.insert({
            email,
            phone: '',
            fullName: name,
            avatarUrl: picture,
            emailVerified: true,
            phoneVerified: false,
            points: 150,
            balance: 0
        });
        isNewUser = true;
    }

    const token = signToken(user);
    return res.json({
        token,
        user: formatUser(user),
        isNewUser,
        requiresProfileCompletion: !user.phone,
        missingFields: !user.phone ? ['phone'] : []
    });
});

// PUT /api/profile
router.put('/profile', authMiddleware, (req, res) => {
    const updates = req.body;

    delete updates.id;
    delete updates.points;
    delete updates.balance;
    delete updates.createdAt;

    const updatedUser = db.users.update(req.user.id, updates);
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    const token = signToken(updatedUser);
    return res.json({
        ...formatUser(updatedUser),
        token
    });
});

module.exports = router;
