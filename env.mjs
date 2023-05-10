import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NEXT_PUBLIC_API_ACCESS_TOKEN: z.string(),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_API_KEY: z.string(),
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_IMG_URL: z.string().url(),
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
    NEXT_PUBLIC_API_ACCESS_TOKEN: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_IMG_URL: process.env.NEXT_PUBLIC_IMG_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_API_ACCESS_TOKEN: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
  },
})
