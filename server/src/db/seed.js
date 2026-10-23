import { db, client } from "./index.js";
import { user } from "./schema.js";
import tourists from "./tourists.data.js";

try {
  const inserted = await db
    .insert(user)
    .values(tourists)
    .onConflictDoNothing({ target: user.email })
    .returning({ email: user.email });

  console.log(`Seeded ${inserted.length} tourist profile(s).`);
} catch (error) {
  console.error("Failed to seed tourist profiles:", error);
  process.exitCode = 1;
} finally {
  await client.end();
}
