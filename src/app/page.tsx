import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import { fetchNowPlayingMovies } from '@/services/movie';

export default async function HomePage() {
  const nowPlayingMovies = await fetchNowPlayingMovies();
  const latestMovie = nowPlayingMovies[nowPlayingMovies.length - 1];

  return (
    <>
      <Navbar />
      <Banner latestMovie={latestMovie} />
    </>
  );
}
