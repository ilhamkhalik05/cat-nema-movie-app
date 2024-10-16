import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/auth-options';
import { fetchMovieWatchlist } from '@/services/movie';
import { fetchTvSeriesWatchlist } from '@/services/tv';

import Navbar from '@/components/navbar';
import MovieCardList from '@/components/movie-card-list';
import TVCardList from '@/components/tv-card-list';
import Banner from '@/components/banner';
import Footer from '@/components/footer';

export default async function WatchlistPage() {
  const session = await getServerSession(authOptions);
  const sessionId = session?.user?.id as string;

  const [movieWatchlist, tvSeriesWatchlist] = await Promise.all([
    fetchMovieWatchlist(sessionId),
    fetchTvSeriesWatchlist(sessionId),
  ]);

  return (
    <>
      <Navbar />
      {movieWatchlist && <Banner bannerType="movie" item={movieWatchlist[0]} isOnWatchlist={true} />}

      <main className="px-8 py-12 flex flex-col gap-20">
        {movieWatchlist && (
          <section>
            <h1 className="text-2xl font-[600] tracking-wider mb-7">Watch your movie list below</h1>
            <MovieCardList movies={movieWatchlist} />
          </section>
        )}

        {tvSeriesWatchlist && (
          <section>
            <h1 className="text-2xl font-[600] tracking-wider mb-7">Watch your tv series list below</h1>
            <TVCardList tvSeries={tvSeriesWatchlist} />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
