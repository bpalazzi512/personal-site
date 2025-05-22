'use server'

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // your outlook email
        pass: process.env.EMAIL_PASSWORD // your outlook password or app-specific password
    }
});

type EmailProps = {
    to: string;
    subject: string;
    html: string;
}

export async function sendEmail({ to, subject, html }: EmailProps) {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            html,
        });

        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
