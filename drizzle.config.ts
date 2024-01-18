import { defineConfig } from "drizzle-kit";
import { env } from "./src/util/env.mjs";

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DB_URL + "?sslmode=require",
  },
  verbose: true,
  strict: true,
});
