import { notFound } from 'next/navigation'
import { fetcher } from '@/fetcher/movie'
import MovieList from '@/components/movie-list'
import { absoluteUrl } from '@/lib/utils'

type Props = {
  params: {
    genre: string | string[]
  }
}

export function generateMetaData({ params }: Props) {
  return {
    title: params.genre,
    description: `Browse a list of ${params.genre} movies available in our database.`,
    openGraph: {
      title: params.genre,
      type: 'website',
      url: absoluteUrl(`/genre/${params.genre}`),
    },
  }
}

async function GenrePage({ params }: Props) {
  if (!params.genre) {
    notFound()
  }

  const movies = await fetcher(`/discover/movie?with_genres=${params.genre}`)

  return (
    <div className="container">
      {movies.results.length ? <MovieList movies={movies.results} /> : null}
    </div>
  )
}

export default GenrePage
