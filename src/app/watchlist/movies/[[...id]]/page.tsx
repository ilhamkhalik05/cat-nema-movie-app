import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { getServerSession } from 'next-auth';
import { getItemIdByParamsId } from '@/lib/utils';
import { fetchMovieDetailsById, fetchMovieWatchlist } from '@/services/movie';

import MovieCardList from '@/components/movie-card-list';
import Banner from '@/components/banner';
import { PageSectionTitle } from '@/components/utils/page-section-title';

export default async function WatchlistMoviesPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const sessionId = session?.user?.id as string;
  const movieId = getItemIdByParamsId(params.id);

  const movieWatchlist = await fetchMovieWatchlist(sessionId);

  // Set banner item to movieById when movieId is given
  const bannerItem = movieId ? await fetchMovieDetailsById(movieId) : movieWatchlist[0];

  return (
    <>
      {bannerItem && <Banner bannerType="movie" item={bannerItem} />}

      <main className="px-8 py-12 flex flex-col gap-20">
        {movieWatchlist && (
          <section>
            <PageSectionTitle>Watch your movie list below</PageSectionTitle>
            <MovieCardList movies={movieWatchlist} />
          </section>
        )}
      </main>
    </>
  );
}
