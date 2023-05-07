import { fetcher } from '@/fetcher/movie'
import type { Movie } from '@/types'
import { notFound } from 'next/navigation'
import MovieDetail from '@/components/movie-detail'

function isMovie(params: unknown): params is Movie {
  return !!(params as Movie).id
}

type Props = {
  params: {
    id: string
  }
}

async function MovieDetailPage({ params }: Props) {
  const movie: unknown = await fetcher(`/movie/${params.id}`)

  if (!isMovie(movie)) {
    return notFound()
  }

  return (
    <div className="w-full grid md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_400px] my-10">
      {/* @ts-ignore */}
      <MovieDetail movie={movie} />

      <div>Movie list</div>
    </div>
  )
}

export default MovieDetailPage
