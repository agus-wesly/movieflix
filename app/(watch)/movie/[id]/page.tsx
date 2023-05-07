import { fetcher } from '@/fetcher/movie'
import type { Movie } from '@/types'
import { notFound } from 'next/navigation'
import MovieDetail from '@/components/movie-detail'
import MovieSimilar from '@/components/movie-similar'

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
    <div className="w-full grid lg:grid-cols-[1fr_400px] my-10 gap-4">
      {/* @ts-ignore */}
      <MovieDetail movie={movie} />

      {/* @ts-ignore */}
      <MovieSimilar movie_id={movie.id} />
    </div>
  )
}

export async function generateStaticParams() {
  const trendMovie = await fetcher('/trending/all/day')
  return trendMovie.results.map((movie) => ({
    id: `${movie.id}`,
  }))
}

export default MovieDetailPage
