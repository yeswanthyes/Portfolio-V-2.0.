const nodemailer = require('nodemailer');
require('dotenv').config({ path: './.env' });

console.log('--- Email Diagnostics ---');
console.log('Service:', process.env.EMAIL_SERVICE);
console.log('User:', process.env.EMAIL_USER);
console.log('Receiver:', process.env.RECEIVER_EMAIL);

// Strip spaces from password if it's a Gmail App Password
const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
console.log('Pass Length (after stripping):', emailPass.length);

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: emailPass
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: 'Portfolio Diagnostic Test',
    text: 'If you receive this, your email configuration is working correctly!'
};

console.log('\nAttempting to send test email...');

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('\n❌ ERROR SENDING EMAIL:');
        console.error(error);
        if (error.code === 'EAUTH') {
            console.log('\n💡 TIP: Authentication failed. This usually means the App Password is incorrect or you need to remove spaces.');
        }
    } else {
        console.log('\n✅ SUCCESS!');
        console.log('Message ID:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    }
});
