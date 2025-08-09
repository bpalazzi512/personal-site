'use server';
import { google } from 'googleapis';
import fetch from 'node-fetch';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const env = process.env.NEXT_PUBLIC_NODE_ENV;

const isProd = env === 'production';

export async function sendEmail(to: string, subject: string, htmlBody: string) {

  const message = [
    'Content-Type: text/html; charset="UTF-8"',
    'MIME-Version: 1.0',
    `From: "Palazzi Dot Dev" <no-reply@palazzi.dev>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `Reply-To: no-reply@palazzi.dev`,
    `Return-Path: no-reply@palazzi.dev`,
    `Message-ID: <${Date.now()}.${Math.random()}@palazzi.dev>`,
    `Date: ${new Date().toUTCString()}`,
    htmlBody
  ].join('\n');

  const encodedMessage = Buffer.from(message).toString('base64');

  try {
    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });
    console.log(result);
    return {
      success: true,
      message: 'Email sent successfully',
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export async function sendEmails(
  name: string, 
  email: string, 
  message: string, 
  recaptchaToken?: string | null
) {
  // Verify recaptcha token in production
  if (isProd) {
    if (!recaptchaToken) {
      throw new Error('Missing reCAPTCHA token');
    }
    
    const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
    const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const params = new URLSearchParams();
    params.append('secret', secretKey || '');
    params.append('response', recaptchaToken);

    const recaptchaRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    
    const recaptchaData = await recaptchaRes.json() as { success: boolean };
    if (!recaptchaData.success) {
      throw new Error('Failed reCAPTCHA verification');
    }
  }

  // Email to Bobby (notification)
  const bobbySubject = `New Contact Form Submission from ${name}`;
  const bobbyHtmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; margin-top: 10px;">${message}</div>
      </div>
      <p style="color: #666; font-size: 14px;">Sent from your personal website contact form.</p>
    </div>
  `;

  // Email to user (confirmation)
  const userSubject = `Thanks for reaching out, ${name}!`;
  const userHtmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Thank you for your message!</h2>
      <p>Hi ${name},</p>
      <p>I've received your message and will get back to you as soon as possible. Here's a copy of what you sent:</p>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <div style="white-space: pre-wrap;">${message}</div>
      </div>
      <p>Best regards,<br>Bobby Palazzi</p>
      <p style="color: #666; font-size: 14px;">This is an automated confirmation email from palazzi.dev</p>
    </div>
  `;

  // Send both emails
  await Promise.all([
    sendEmail('bobbypalazzi@gmail.com', bobbySubject, bobbyHtmlBody),
    sendEmail(email, userSubject, userHtmlBody)
  ]);
}