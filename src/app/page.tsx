import { fetchNowPlayingMovies } from '@/services/movie';
import { fetchNowPlayingTVSeries } from '@/services/tv';

import Banner from '@/components/banner';
import MovieCardList from '@/components/movie-card-list';
import TVCardList from '@/components/tv-card-list';
import Footer from '@/components/footer';

export default async function HomePage() {
  const [nowPlayingMovies, nowPlayingTVSeries] = await Promise.all([
    fetchNowPlayingMovies(),
    fetchNowPlayingTVSeries(),
  ]);

  const latestMovie = nowPlayingMovies[nowPlayingMovies.length - 1];

  return (
    <>
      <Banner bannerType="movie" item={latestMovie} />

      <main className="px-8 py-12 flex flex-col gap-20">
        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Now Playing</h1>
          <MovieCardList movies={nowPlayingMovies} />
        </section>

        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">TV Series</h1>
          <TVCardList tvSeries={nowPlayingTVSeries} />
        </section>
      </main>

      <Footer />
    </>
  );
}
