import MovieSection from '@/components/movie-section'
import SwiperComponent from '@/components/swiper'
import { fetcher } from '@/fetcher/movie'

export const revalidate = 1440

export default async function Home() {
  const [trendMovie, popularMovie, upcomingMovie] = await Promise.all([
    fetcher('/trending/all/day'),
    fetcher('/movie/popular'),
    fetcher('/movie/upcoming'),
  ])
  return (
    <div>
      <div className="w-full relative h-[50vh] mb-5">
        <SwiperComponent />
      </div>

      <div className="container">
        <MovieSection topic="trending" movies={trendMovie.results} />
        <MovieSection topic="what's popular ?" movies={popularMovie.results} />

        <MovieSection topic="upcoming" movies={upcomingMovie.results} />
      </div>
    </div>
  )
}
