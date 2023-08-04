const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        let info = await transporter.sendMail({
            from: 'devdalia9@gmail.com',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        });

        console.log(info);

        return info;
    }catch (err) {
        console.error("Error while sending OTP mail:", err.message);
    }
}

module.exports = mailSender