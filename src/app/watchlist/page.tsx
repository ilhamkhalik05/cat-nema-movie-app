import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/auth-options';
import { fetchMovieWatchlist } from '@/services/movie';
import { fetchTvSeriesWatchlist } from '@/services/tv';

import MovieCardList from '@/components/movie-card-list';
import TVCardList from '@/components/tv-card-list';
import Banner from '@/components/banner';
import { PageSectionTitle } from '@/components/utils/page-section-title';

export default async function WatchlistPage() {
  const session = await getServerSession(authOptions);
  const sessionId = session?.user?.id as string;

  const [movieWatchlist, tvSeriesWatchlist] = await Promise.all([
    fetchMovieWatchlist(sessionId),
    fetchTvSeriesWatchlist(sessionId),
  ]);

  return (
    <>
      {movieWatchlist && <Banner bannerType="movie" item={movieWatchlist[movieWatchlist.length - 1]} />}

      <main className="px-8 py-12 flex flex-col gap-20">
        {movieWatchlist && (
          <section>
            <PageSectionTitle>Showing {movieWatchlist.length} of your movie watchlist</PageSectionTitle>
            <MovieCardList movies={movieWatchlist} />
          </section>
        )}

        {tvSeriesWatchlist && (
          <section>
            <PageSectionTitle>Showing {tvSeriesWatchlist.length} of your tv series watchlist</PageSectionTitle>
            <TVCardList tvSeries={tvSeriesWatchlist} />
          </section>
        )}
      </main>
    </>
  );
}
