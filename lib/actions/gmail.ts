'use server';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export async function sendEmail(to: string, subject: string, htmlBody: string) {
  const message = [
    'Content-Type: text/html; charset="UTF-8"',
    'MIME-Version: 1.0',
    `From: no-reply@palazzi.dev`,
    `To: ${to}`,
    `Subject: ${subject}`,
    '',
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