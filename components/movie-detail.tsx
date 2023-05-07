import { fetcher } from '@/fetcher/movie'
import { MovieVideo } from '@/types'
import { notFound } from 'next/navigation'
import { VideoPlayer } from './video-player'
import { getYearFromDate } from '@/lib/utils'
import Link from 'next/link'
import { getDuration } from '@/lib/utils'

import type { Movie } from '@/types'

type Props = {
  movie: Movie
}

function isMovieVideo(params: unknown): params is MovieVideo {
  return !!(params as MovieVideo).results[0]?.key
}

async function MovieDetail({ movie }: Props) {
  const movieVideo: unknown = await fetcher(`/movie/${movie.id}/videos`)

  if (!isMovieVideo(movieVideo)) {
    notFound()
  }

  const movieUrl = `https://www.youtube.com/watch?v=${movieVideo.results[0].key}`

  const genres = movie.genres.map((genre, i) => {
    const genreHref = `/genre/${genre.id}`

    return (
      <Link className="hover:text-accent-foreground/70" href={genreHref}>
        {genre.name} {i !== movie.genres.length - 1 ? ',' : null}
      </Link>
    )
  })

  return (
    <div className="space-y-5">
      <VideoPlayer url={movieUrl} />

      <div className="">
        <div className="mb-5">
          <h1 className="text-2xl font-bold">
            {movie.title} ({getYearFromDate(movie.release_date)})
          </h1>
          <div className="flex items-center gap-5 text-sm text-accent-foreground/90">
            <span>{movie.release_date}</span>
            <span>{genres}</span>
            {movie.runtime ? <span>{getDuration(movie.runtime)}</span> : null}
          </div>
        </div>
        <p className="text-popover-foreground">{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail
