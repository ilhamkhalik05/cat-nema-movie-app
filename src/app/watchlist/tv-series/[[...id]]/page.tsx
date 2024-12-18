import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { getServerSession } from 'next-auth';
import { fetchTVSeriesDetailsById, fetchTvSeriesWatchlist } from '@/services/tv';

import Banner from '@/components/banner';
import TVCardList from '@/components/tv-card-list';
import { PageSectionTitle } from '@/components/utils/page-section-title';
import { getItemIdByParamsId } from '@/lib/utils';

export default async function WatchlistMoviesPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const sessionId = session?.user?.id as string;
  const tvSeriesId = getItemIdByParamsId(params.id);

  const tvSeriesWatchlist = await fetchTvSeriesWatchlist(sessionId);
  const bannerItem = tvSeriesId ? await fetchTVSeriesDetailsById(tvSeriesId) : tvSeriesWatchlist[0];

  return (
    <>
      {bannerItem && <Banner bannerType="tv-series" item={bannerItem} />}

      <main className="px-8 py-12 flex flex-col gap-20">
        {tvSeriesWatchlist && (
          <section>
            <PageSectionTitle>Watch your tv series list below</PageSectionTitle>
            <TVCardList tvSeries={tvSeriesWatchlist} />
          </section>
        )}
      </main>
    </>
  );
}
