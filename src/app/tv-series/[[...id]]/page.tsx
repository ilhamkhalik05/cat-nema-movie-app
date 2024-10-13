import type { TVSeriesDetails } from '@/lib/type';
import {
  fetchNowPlayingTVSeries,
  fetchPopularTVSeries,
  fetchTopRatedTVSeries,
  fetchTVSeriesDetailsById,
} from '@/services/tv';
import { getLatestItemDetails } from '@/lib/utils';

import Banner from '@/components/banner';
import Footer from '@/components/footer';
import TVCardList from '@/components/tv-card-list';

export default async function TVSeriesPage({ params }: { params: { id: string } }) {
  const tvSeriesId = params.id && Number(params.id[0]);

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
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Now Playing</h1>
          <TVCardList tvSeries={nowPlayingTVSeries} />
        </section>

        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Popular</h1>
          <TVCardList tvSeries={popularTVSeries} />
        </section>

        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">All Time Best</h1>
          <TVCardList tvSeries={topRatedTVSeries} />
        </section>
      </main>

      <Footer />
    </>
  );
}
