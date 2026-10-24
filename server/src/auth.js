import "dotenv/config";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "./db/index.js";
import * as schema from "./db/schema.js";

const secret = process.env.BETTER_AUTH_SECRET;
const baseURL = process.env.BETTER_AUTH_URL;
const clientURL = process.env.CLIENT_URL;

if (!secret || secret.length < 32) {
  throw new Error("BETTER_AUTH_SECRET must be set to a secret with at least 32 characters.");
}

if (!baseURL) {
  throw new Error("BETTER_AUTH_URL is not set. Add it to server/.env.");
}

if (!clientURL) {
  throw new Error("CLIENT_URL is not set. Add it to server/.env.");
}

const clientOrigin = new URL(clientURL);
const trustedOrigins = new Set([clientOrigin.origin]);

// localhost and 127.0.0.1 are different browser origins; allow either for local development.
if (clientOrigin.hostname === "localhost") {
  const loopbackOrigin = new URL(clientOrigin);
  loopbackOrigin.hostname = "127.0.0.1";
  trustedOrigins.add(loopbackOrigin.origin);
} else if (clientOrigin.hostname === "127.0.0.1") {
  const localhostOrigin = new URL(clientOrigin);
  localhostOrigin.hostname = "localhost";
  trustedOrigins.add(localhostOrigin.origin);
}

export const auth = betterAuth({
  baseURL,
  secret,
  trustedOrigins: [...trustedOrigins],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
