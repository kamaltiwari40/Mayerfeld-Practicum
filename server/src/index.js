import "dotenv/config";
import cors from "cors";
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";
import touristsRouter from "./routes/tourists.js";

const app = express();
const port = Number.parseInt(process.env.PORT, 10) || 3000;
const clientOrigin = new URL(process.env.CLIENT_URL).origin;

app.use(
  cors({
    origin: clientOrigin,
    credentials: true,
  }),
);

// Better Auth must receive the raw request body, so mount it before express.json().
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "WanderMore API",
    status: "running",
    endpoints: ["/api/health", "/api/tourists", "/api/auth/*"],
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/tourists", touristsRouter);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error." });
});

app.listen(port, () => {
  console.log(`WanderMore API listening on http://localhost:${port}`);
});

