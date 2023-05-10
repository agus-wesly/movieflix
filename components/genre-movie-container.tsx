'use client'

import { fetcher } from '@/fetcher/movie'
import { MovieResponse } from '@/types'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from './infinite-scroll'

import MovieCard from './movie-card'
import MovieList from './movie-list'

function GenreMovieContainer({
  initialMovies,
  genre,
}: {
  initialMovies: InfiniteData<MovieResponse>
  genre: string
}) {
  const query = useInfiniteQuery<MovieResponse>({
    initialData: initialMovies,
    queryKey: ['movie-genre'],
    queryFn: ({ pageParam = 1 }) =>
      fetcher(`/discover/movie?with_genres=${genre}&page=${pageParam}`),

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
    <MovieList>
      <InfiniteScroll query={query} className="col-span-full">
        {(page) =>
          page?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </InfiniteScroll>
    </MovieList>
  )
}

export default GenreMovieContainer
