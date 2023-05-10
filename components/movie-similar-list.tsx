'use client'

import { getImageUrl, getYearFromDate } from '@/lib/utils'
import { Movie, MovieResponse } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

import { useInfiniteQuery } from '@tanstack/react-query'
import type { InfiniteData } from '@tanstack/react-query'
import InfiniteScroll from './infinite-scroll'
import { fetcher } from '@/fetcher/movie'

function MovieSimilarList({
  initialMovies,
  movie_id,
}: {
  initialMovies: InfiniteData<MovieResponse>
  movie_id: number
}) {
  const query = useInfiniteQuery<MovieResponse>({
    initialData: initialMovies,
    queryKey: ['movies-similar'],
    queryFn: ({ pageParam = 1 }) =>
      fetcher(`/movie/${movie_id}/similar?page=${pageParam}`),

    staleTime: 0,
    refetchInterval: Infinity,
    refetchOnWindowFocus: false,

    getNextPageParam: (currentMovie) => {
      const currentPage = currentMovie.page
      return currentMovie.total_pages >= currentPage
        ? currentPage + 1
        : undefined
    },
  })

  return (
    <div className="grid sticky top-0 h-[99vh] overflow-y-auto gap-4">
      <InfiniteScroll query={query}>
        {(page) =>
          page?.results?.map((movie) => <MovieSimilarCard movie={movie} />)
        }
      </InfiniteScroll>
    </div>
  )
}

function MovieSimilarCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex gap-4 relative">
      <div className="relative w-[168px] h-[94px] flex-none">
        <Image
          src={getImageUrl({ size: 'small', path: movie.poster_path })}
          alt={`${movie.id}-thumbnail`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="space-y-1">
        <p className="text-sm font-semibold">
          {movie.title} <span>({getYearFromDate(movie.release_date)})</span>{' '}
        </p>

        <p className="text-xs text-muted-foreground line-clamp-3">
          {movie.overview}
        </p>
      </div>

      <Link href={`/movie/${movie.id}`} className="absolute inset-0" />
    </div>
  )
}

export default MovieSimilarList
