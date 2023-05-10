import { fetcher } from '@/fetcher/movie'
import { notFound } from 'next/navigation'
import SearchContainer from '@/components/search-container'

export const dynamic = 'force-dynamic'

type Props = {
  searchParams: {
    query: string | string[] | undefined
  }
}

async function SearchPage({ searchParams }: Props) {
  const searchMovie = await fetcher(
    `/search/movie?query=${searchParams.query}&page=1`
  )

  if (!searchMovie.results.length) {
    notFound()
  }

  return (
    <div className="container">
      <SearchContainer
        initialMovies={{
          pages: [searchMovie],
          pageParams: [1],
        }}
        searchParams={searchParams}
      />
    </div>
  )
}

export default SearchPage
