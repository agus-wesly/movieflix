'use client'
import Image from 'next/image'
import Link from 'next/link'
import type { Movie } from '@/constant/movies'
import { formattedDate } from '@/lib/utils'

import { getImageUrl } from '@/lib/utils'

type Props = {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <div className="relative w-full group">
      <Image
        width={240}
        height={2}
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

      <Link href={`/movie/${movie.id}`} className="absolute inset-0" />
    </div>
  )
}

export default MovieCard
