import { env } from '@/env.mjs'
import type { MovieResponse } from '@/types'
import type { RequestInit } from 'next/dist/server/web/spec-extension/request'

export async function fetcher(
  endpoint: string,
  options?: RequestInit
): Promise<MovieResponse> {
  const response = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
  })

  return await response.json()
}
