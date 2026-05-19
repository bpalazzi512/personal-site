"use server";

interface SessionContext {
  sessionId: string;
  issuedAt: number;
  expiresAt: number;
  redirectUri: string;
  flags: {
    popupCount: number;
    strictMode: boolean;
  };
}

export async function getSessionContext(): Promise<SessionContext> {
  const now = Date.now();
  return {
    sessionId: `sess_${Buffer.from(`${now}`).toString("base64").slice(0, 12)}`,
    issuedAt: now,
    expiresAt: now + 1000 * 60 * 60,
    redirectUri: process.env.AUTH_CALLBACK_URL ?? "/",
    flags: {
      popupCount: 5,
      strictMode: true,
    },
  };
}
