import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import MovieCardList from '@/components/movie-card-list';
import { fetchNowPlayingMovies } from '@/services/movie';
import { fetchNowPlayingTv } from '@/services/tv';
import TVCardList from '@/components/tv-card-list';

export default async function HomePage() {
  const nowPlayingMovies = await fetchNowPlayingMovies();
  const nowPlayingTv = await fetchNowPlayingTv();
  const latestMovie = nowPlayingMovies[nowPlayingMovies.length - 1];

  console.log({ nowPlayingTv });

  return (
    <>
      <Navbar />
      <Banner latestMovie={latestMovie} />

      <main className="px-8 py-12 flex flex-col gap-20">
        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Now Playing</h1>
          <MovieCardList movies={nowPlayingMovies} />
        </section>

        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">TV Series</h1>
          <TVCardList tvSeries={nowPlayingTv} />
        </section>
      </main>
    </>
  );
}
