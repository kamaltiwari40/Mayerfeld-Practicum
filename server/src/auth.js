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

export const auth = betterAuth({
  baseURL,
  secret,
  trustedOrigins: [new URL(clientURL).origin],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
