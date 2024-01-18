import { defineConfig } from "drizzle-kit";
import { env } from "./src/util/env.js";

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL + "?sslmode=require",
  },
  verbose: true,
  strict: true,
});
