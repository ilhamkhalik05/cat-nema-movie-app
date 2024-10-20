import type { MovieDetails } from '@/lib/type';
import { fetchNowPlayingMovies } from '@/services/movie';
import { fetchNowPlayingTVSeries } from '@/services/tv';
import { getLatestItemDetails } from '@/lib/utils';

import Banner from '@/components/banner';
import MovieCardList from '@/components/movie-card-list';
import TVCardList from '@/components/tv-card-list';
import Footer from '@/components/footer';
import { PageSectionTitle } from '@/components/utils/page-section-title';

export default async function HomePage() {
  const [nowPlayingMovies, nowPlayingTVSeries] = await Promise.all([
    fetchNowPlayingMovies(),
    fetchNowPlayingTVSeries(),
  ]);

  const latestMovieDetails = await getLatestItemDetails({ itemType: 'movie', items: nowPlayingMovies });

  return (
    <>
      <Banner bannerType="movie" item={latestMovieDetails as MovieDetails} />

      <main className="px-8 py-12 flex flex-col gap-20">
        <section>
          <PageSectionTitle>Now Playing in Cinema</PageSectionTitle>
          <MovieCardList movies={nowPlayingMovies} />
        </section>

        <section>
          <PageSectionTitle>Newly Added TV Show</PageSectionTitle>
          <TVCardList tvSeries={nowPlayingTVSeries} />
        </section>
      </main>

      <Footer />
    </>
  );
}
