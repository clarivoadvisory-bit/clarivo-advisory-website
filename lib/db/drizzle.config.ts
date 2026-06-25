import { defineConfig } from "drizzle-kit";
import path from "path";

const url = process.env.NEON_DATABASE_URL ?? process.env.DATABASE_URL;

if (!url) {
  throw new Error(
    "No database URL configured. Set NEON_DATABASE_URL (Replit) or DATABASE_URL (Vercel/production).",
  );
}

export default defineConfig({
  schema: path.join(__dirname, "./src/schema/index.ts"),
  dialect: "postgresql",
  dbCredentials: { url },
});
