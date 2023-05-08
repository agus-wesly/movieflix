import { fetcher } from '@/fetcher/movie'
import { notFound } from 'next/navigation'
import MovieList from '@/components/movie-list'

type Props = {
  searchParams: {
    query: string | string[] | undefined
  }
}

async function SearchPage({ searchParams }: Props) {
  const searchMovie = await fetcher(`/search/movie?query=${searchParams.query}`)

  if (!searchMovie.results.length) {
    notFound()
  }

  return <div className="container">
    <MovieList movies={searchMovie.results}/>
  </div>
}

export default SearchPage
