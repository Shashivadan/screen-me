import { config } from "dotenv";
config({ path: "../../.env" });
import { defineConfig } from "drizzle-kit";

console.log(process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema",
  dialect: "postgresql",
  casing: "snake_case",
  strict: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
