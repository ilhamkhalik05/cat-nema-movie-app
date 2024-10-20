import type { TVSeriesDetails } from '@/lib/type';
import {
  fetchNowPlayingTVSeries,
  fetchPopularTVSeries,
  fetchTopRatedTVSeries,
  fetchTVSeriesDetailsById,
} from '@/services/tv';
import { getItemIdByParamsId, getLatestItemDetails } from '@/lib/utils';

import Banner from '@/components/banner';
import Footer from '@/components/footer';
import TVCardList from '@/components/tv-card-list';
import { PageSectionTitle } from '@/components/utils/page-section-title';

export default async function TVSeriesPage({ params }: { params: { id: string } }) {
  const tvSeriesId = getItemIdByParamsId(params.id);

  const [nowPlayingTVSeries, popularTVSeries, topRatedTVSeries] = await Promise.all([
    fetchNowPlayingTVSeries(),
    fetchPopularTVSeries(),
    fetchTopRatedTVSeries(),
  ]);

  // TV Series banner will be the details of the latest tv series if tvSeriesId is not given in params
  const tvSeriesDetails = tvSeriesId && (await fetchTVSeriesDetailsById(tvSeriesId));
  const tvSeriesBanner =
    tvSeriesDetails || (await getLatestItemDetails({ itemType: 'tv-series', items: nowPlayingTVSeries }));

  return (
    <>
      <Banner bannerType="tv-series" item={tvSeriesBanner as TVSeriesDetails} />

      <main className="px-8 py-12 flex flex-col gap-20">
        <section>
          <PageSectionTitle>Newly Added</PageSectionTitle>
          <TVCardList tvSeries={nowPlayingTVSeries} />
        </section>

        <section>
          <PageSectionTitle>Popular TV Show</PageSectionTitle>
          <TVCardList tvSeries={popularTVSeries} />
        </section>

        <section>
          <PageSectionTitle>All Time Favorite</PageSectionTitle>
          <TVCardList tvSeries={topRatedTVSeries} />
        </section>
      </main>

      <Footer />
    </>
  );
}
