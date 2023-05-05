import { Button } from './ui/button'
import MovieList from './movie-list'
import type { Movie } from '@/constant/movies'

type Props = {
  topic: string
  movies: Movie[]
}

function MovieSection({ topic, movies }: Props) {
  return (
    <>
      <div className="flex items-center justify-between my-5">
        <div>
          <h1 className="text-4xl font font-bold capitalize">{topic}</h1>
        </div>

        <Button variant={'ghost'}>See more</Button>
      </div>
      <MovieList movies={movies} />
    </>
  )
}

export default MovieSection
