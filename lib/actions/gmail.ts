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

export async function sendEmail(to: string, subject: string, htmlBody: string, recaptchaToken?: string) {
  // Verify recaptcha token
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