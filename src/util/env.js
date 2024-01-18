import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    POSTGRES_URL: z.string().url(),
  },
});

export { env };
