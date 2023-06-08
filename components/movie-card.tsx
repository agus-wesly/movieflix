'use client'
import Link from 'next/link'
import type { Movie } from '@/types'
import { formattedDate } from '@/lib/utils'

import { getImageUrl } from '@/lib/utils'

type Props = {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <Link className="relative w-full group" href={`/movie/${movie.id}`}>
      <img
        className="object-cover rounded aspect-[9/14] lg:hover:scale-105 transition duration-200"
        src={getImageUrl({ size: 'small', path: movie.poster_path })}
        alt="poster"
      />
      <p className="font-semibold text-sm mt-3 truncate max-w-full group-hover:text-purple-600">
        {movie.title}
      </p>
      <p className="text-xs text-muted-foreground">
        {formattedDate(movie.release_date)}
      </p>
    </Link>
  )
}

export default MovieCard
