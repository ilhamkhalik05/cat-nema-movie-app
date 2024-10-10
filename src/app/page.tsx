import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import MovieCardList from '@/components/movie-card-list';
import { fetchNowPlayingMovies } from '@/services/movie';

export default async function HomePage() {
  const nowPlayingMovies = await fetchNowPlayingMovies();
  const latestMovie = nowPlayingMovies[nowPlayingMovies.length - 1];

  return (
    <>
      <Navbar />
      <Banner latestMovie={latestMovie} />

      <main className="px-8 py-12 flex flex-col gap-20">
        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Now Playing</h1>
          <MovieCardList movies={nowPlayingMovies} />
        </section>
      </main>
    </>
  );
}
