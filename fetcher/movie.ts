import { env } from '@/env.mjs'
import type { Movie } from '@/constant/movies'

type MovieResponse = {
  page: number
  results: Movie[]
}

export async function fetcher(endpoint: string): Promise<MovieResponse> {
  const response = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
  })

  return await response.json()
}
