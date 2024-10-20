import { BannerContent } from './banner-content';
import { Movie, MovieDetails, TVSeries, TVSeriesDetails } from '@/lib/type';
import { ImageWithFallback } from '../utils/image-with-fallback';
import { getApiImage } from '@/lib/api';
import { fallbackCardImage } from '@/lib/assets';

type BannerProps = {
  bannerType: 'tv-series' | 'movie';
  item: Movie | MovieDetails | TVSeries | TVSeriesDetails;
  isOnWatchlist?: boolean;
};

export default function Banner({ bannerType, item, isOnWatchlist }: BannerProps): React.ReactNode {
  const isMovie = bannerType === 'movie';
  const titleOrName = isMovie ? (item as Movie).title : (item as TVSeries).name;
  const posterPath = isMovie ? (item as Movie).poster_path : (item as TVSeriesDetails).poster_path;
  const popularity = item.popularity;
  const voteAverage = item.vote_average;
  const overview = item.overview;

  return (
    <div className="relative">
      {/* Banner Image */}
      <ImageWithFallback
        className="brightness-[0.55] object-cover object-center w-full h-screen select-none"
        src={getApiImage(posterPath)}
        alt={titleOrName}
        width={3800}
        height={3800}
        fallbackSrc={fallbackCardImage.src} // Need its own fallback image
        loading="eager"
      />

      <BannerContent
        titleOrName={titleOrName}
        popularity={popularity}
        voteAverage={voteAverage}
        overview={overview}
        isOnWatchlist={isOnWatchlist}
      />
    </div>
  );
}
