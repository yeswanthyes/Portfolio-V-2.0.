const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'up', time: new Date().toISOString() });
});

// Global Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] 🔍 ${req.method} ${req.url}`);
    next();
});

app.use(express.json());

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : ''
    }
});

// Verify connection on startup
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Email Transporter Error:', error);
    } else {
        console.log('✅ Email Transporter is ready to send messages');
    }
});

// Main Contact Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const requestId = Math.random().toString(36).substring(7).toUpperCase();

    console.log(`\n[${requestId}] 📨 Incoming request to /api/contact`);
    
    // Validate simple required fields
    if (!name || !email || !message) {
        console.warn(`[${requestId}] ⚠️ Validation failed: Missing fields`);
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    console.log(`[${requestId}] Name: ${name}, Email: ${email}`);

    try {
        // Double check connection before sending
        console.log(`[${requestId}] 🔄 Verifying SMTP connection...`);
        await transporter.verify();
        
        // Prepare email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `[${requestId}] Portfolio Message: ${name}`,
            text: `Request ID: ${requestId}\nDate: ${new Date().toLocaleString()}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            replyTo: email
        };

        console.log(`[${requestId}] 📤 Attempting to send email to ${process.env.RECEIVER_EMAIL}...`);
        const info = await transporter.sendMail(mailOptions);
        
        console.log(`[${requestId}] ✅ Success! Message ID: ${info.messageId}`);
        console.log(`[${requestId}] Response: ${info.response}`);
        
        res.status(200).json({ success: true, message: 'Message sent and forwarded to email!' });
    } catch (error) {
        console.error(`[${requestId}] ❌ ERROR:`, error.message);
        res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`Backend API Server running on http://localhost:${PORT}`);
});
