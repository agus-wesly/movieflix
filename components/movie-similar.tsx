import { fetcher } from '@/fetcher/movie'
import type { Movie } from '@/types'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'
import { getYearFromDate } from '@/lib/utils'
import Link from 'next/link'

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

function MovieSimilarList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid sticky top-0 h-[99vh] overflow-y-auto gap-4">
      {movies.map((movie) => (
        <MovieSimilarCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

type Props = {
  movie_id: number
}

async function MovieSimilar({ movie_id }: Props) {
  const similarMovies = await fetcher(`/movie/${movie_id}/similar`)

  return (
    <div className="relative">
      <h3 className="text-xl font-bold mb-4">Related Movies</h3>
      {!similarMovies.results.length ? (
        <p className="text-muted-foreground">No related movie</p>
      ) : (
        <MovieSimilarList movies={similarMovies.results} />
      )}
    </div>
  )
}

export default MovieSimilar
