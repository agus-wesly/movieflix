import { fetcher } from '@/fetcher/movie'
import MovieSimilarList from './movie-similar-list'

type Props = {
  movie_id: number
}

async function MovieSimilar({ movie_id }: Props) {
  const similarMovies = await fetcher(`/movie/${movie_id}/similar?page=1`)

  return (
    <div className="relative">
      <h3 className="text-xl font-bold mb-4">Related Movies</h3>
      {!similarMovies.results.length ? (
        <p className="text-muted-foreground">No related movie</p>
      ) : (
        <MovieSimilarList
          initialMovies={{
            pageParams: ['1'],
            pages: [similarMovies],
          }}
          movie_id={movie_id}
        />
      )}
    </div>
  )
}

export default MovieSimilar
