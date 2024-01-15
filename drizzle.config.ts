import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  },
  verbose: true,
  strict: true,
});
