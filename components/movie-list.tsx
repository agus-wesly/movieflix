'use client'
import MovieCard from './movie-card'
import type { Movie } from '@/types'

type Props = {
  movies: Movie[]
}

function MovieList({ movies }: Props) {
  return (
    <div className="gap-4 grid grid-cols-3 border-t py-4 justify-items-center md:justify-items-start md:grid-cols-6 ">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
