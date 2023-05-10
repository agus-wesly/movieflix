'use client'
import MovieCard from './movie-card'
import type { Movie } from '@/types'

type Props = {
  movies?: Movie[]
  children?: React.ReactNode
}

function MovieList({ movies, children }: Props) {
  return (
    <div className="gap-6 grid grid-cols-3 border-t py-4 justify-items-center md:justify-items-start md:grid-cols-6">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {children ? children : null}
    </div>
  )
}

export default MovieList
