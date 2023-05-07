import { notFound } from 'next/navigation'
import { fetcher } from '@/fetcher/movie'
import MovieList from '@/components/movie-list'
import { absoluteUrl } from '@/lib/utils'
import genre from '@/constant/genre'

type Props = {
  params: {
    genre: string[]
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
