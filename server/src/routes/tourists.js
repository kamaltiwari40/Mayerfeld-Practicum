import { Router } from "express";
import { desc, eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { user } from "../db/schema.js";

const router = Router();

// List public tourist profiles. Email addresses are intentionally omitted.
router.get("/", async (req, res, next) => {
  const rawLimit = Number.parseInt(req.query.limit, 10);
  const rawOffset = Number.parseInt(req.query.offset, 10);
  const limit = Number.isFinite(rawLimit) ? Math.min(Math.max(rawLimit, 1), 100) : 25;
  const offset = Number.isFinite(rawOffset) ? Math.max(rawOffset, 0) : 0;

  try {
    const tourists = await db
      .select({
        id: user.id,
        name: user.name,
        image: user.image,
        createdAt: user.createdAt,
      })
      .from(user)
      .orderBy(desc(user.createdAt))
      .limit(limit)
      .offset(offset);

    res.json({ tourists, limit, offset });
  } catch (error) {
    next(error);
  }
});

// Fetch one public tourist profile by user ID.
router.get("/:id", async (req, res, next) => {
  try {
    const [tourist] = await db
      .select({
        id: user.id,
        name: user.name,
        image: user.image,
        createdAt: user.createdAt,
      })
      .from(user)
      .where(eq(user.id, req.params.id))
      .limit(1);

    if (!tourist) {
      return res.status(404).json({ error: "Tourist not found." });
    }

    res.json({ tourist });
  } catch (error) {
    next(error);
  }
});

export default router;
