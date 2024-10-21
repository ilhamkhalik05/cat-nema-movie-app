import { BannerContent } from './banner-content';
import { Movie, MovieDetails, TVSeries, TVSeriesDetails } from '@/lib/type';
import { ImageWithFallback } from '../utils/image-with-fallback';
import { getApiImage } from '@/lib/api';
import { fallbackCardImage } from '@/lib/assets';
import { fetchMovieBannerImageSrc, fetchMovieWatchlist } from '@/services/movie';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { fetchTvSeriesWatchlist } from '@/services/tv';

type BannerProps = {
  bannerType: 'tv-series' | 'movie';
  item: Movie | MovieDetails | TVSeries | TVSeriesDetails;
};

export default async function Banner({ bannerType, item }: BannerProps) {
  const session = await getServerSession(authOptions);
  const sessionId = session?.user?.id as string;

  const id = item.id;
  const isMovie = bannerType === 'movie';
  const watchlistItem = isMovie ? await fetchMovieWatchlist(sessionId) : await fetchTvSeriesWatchlist(sessionId);
  const isOnWatchlist = watchlistItem.some((item) => item.id === id);

  const titleOrName = isMovie ? (item as Movie).title : (item as TVSeries).name;
  const backdropPath = isMovie ? (await fetchMovieBannerImageSrc(id)) || item.backdrop_path : item.backdrop_path;
  const popularity = item.popularity;
  const voteAverage = item.vote_average;
  const overview = item.overview;

  const desktopBannerSrc = getApiImage(backdropPath);
  const mobileBannerSrc = getApiImage(item.backdrop_path); // Possible improvement

  return (
    <div className="relative">
      {/* Desktop Banner Image */}
      <div className="hidden md:block">
        <ImageWithFallback
          className="brightness-[0.60] object-cover object-center w-full h-screen select-none"
          src={desktopBannerSrc}
          alt={titleOrName}
          width={3840}
          height={3840}
          quality={100}
          fallbackSrc={fallbackCardImage.src} // Need its own fallback image
          loading="eager"
        />
      </div>

      {/* Mobile Banner Image */}
      <div className="block md:hidden">
        <ImageWithFallback
          className="brightness-[0.60] object-cover object-center w-full h-screen select-none"
          src={mobileBannerSrc}
          alt={titleOrName}
          width={3840}
          height={3840}
          quality={100}
          fallbackSrc={fallbackCardImage.src} // Need its own fallback image
          loading="eager"
        />
      </div>

      <BannerContent
        bannerType={bannerType}
        id={id}
        titleOrName={titleOrName}
        popularity={popularity}
        voteAverage={voteAverage}
        overview={overview}
        isOnWatchlist={isOnWatchlist}
      />
    </div>
  );
}
