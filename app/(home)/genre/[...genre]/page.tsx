import { notFound } from 'next/navigation'
import { fetcher } from '@/fetcher/movie'
import MovieList from '@/components/movie-list'
import { absoluteUrl } from '@/lib/utils'
import genre from '@/constant/genre'
import { Metadata } from 'next'

export const revalidate = 10080

type Props = {
  params: {
    genre: string[]
  }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: params.genre[0],
    description: `Browse a list of ${params.genre} movies available in our database.`,
    openGraph: {
      title: params.genre[0],
      type: 'website',
      url: absoluteUrl(`/genre/${params.genre}`),
    },
  }
}

export async function generateStaticParams() {
  return genre.map((gen) => ({
    genre: `${gen.id}`.split(' '),
  }))
}

async function GenrePage({ params }: Props) {
  if (!params.genre) {
    notFound()
  }

  const movies = await fetcher(`/discover/movie?with_genres=${params.genre}`)

  if (!movies.results.length) {
    notFound()
  }

  const genreNameList = params.genre.map(
    (gen) => genre.find((genList) => `${genList.id}` === gen)?.name
  )

  const genreName = genreNameList.join('')

  return (
    <div className="container">
      {genreName && (
        <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-5">
          {genreName}
        </h1>
      )}
      {movies.results.length ? <MovieList movies={movies.results} /> : null}
    </div>
  )
}

export default GenrePage
