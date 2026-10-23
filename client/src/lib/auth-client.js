import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // In development, Vite proxies /api requests to the Express server.
  // Set VITE_AUTH_URL if the auth server uses a different origin in deployment.
  baseURL: import.meta.env.VITE_AUTH_URL || window.location.origin,
});

export const { signIn, signUp, signOut, useSession } = authClient;
