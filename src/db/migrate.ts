import { migrate } from "drizzle-orm/mysql2/migrator";
import { db, pool } from "./index";

try {
  await migrate(db, { migrationsFolder: "./drizzle" });
  console.info("Database migrations applied successfully.");
} finally {
  await pool.end();
}
