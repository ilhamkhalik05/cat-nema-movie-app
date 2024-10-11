import { fetchNowPlayingTVSeries, fetchPopularTVSeries } from '@/services/tv';

import Banner from '@/components/banner';
import Footer from '@/components/footer';
import TVCardList from '@/components/tv-card-list';

export default async function TVSeriesPage() {
  const [nowPlayingTVSeries, popularTVSeries] = await Promise.all([fetchNowPlayingTVSeries(), fetchPopularTVSeries()]);
  const latestTVSeries = nowPlayingTVSeries[nowPlayingTVSeries.length - 1];

  return (
    <>
      <Banner bannerType="tv-series" item={latestTVSeries} />

      <main className="px-8 py-12 flex flex-col gap-20">
        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Now Playing</h1>
          <TVCardList tvSeries={nowPlayingTVSeries} />
        </section>

        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Popular</h1>
          <TVCardList tvSeries={popularTVSeries} />
        </section>
      </main>

      <Footer />
    </>
  );
}