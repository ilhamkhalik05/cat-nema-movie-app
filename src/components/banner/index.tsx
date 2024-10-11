import Image from 'next/image';
import { BannerContent } from './banner-content';
import { API_BASE_IMG_URL } from '@/lib/api';
import { Movie, TVSeries } from '@/lib/type';

type BannerProps = {
  bannerType: 'tv-series' | 'movie';
  item: Movie | TVSeries;
};

export default function Banner({ bannerType, item }: BannerProps): React.ReactNode {
  const isMovie = bannerType === 'movie';
  const titleOrName = isMovie ? (item as Movie).title : (item as TVSeries).name;
  const posterPath = isMovie ? (item as Movie).poster_path : (item as TVSeries).poster_path;
  const popularity = item.popularity;
  const voteAverage = item.vote_average;
  const overview = item.overview;

  return (
    <div className="relative">
      <Image
        className="brightness-[0.55] object-cover w-full h-screen"
        src={`${API_BASE_IMG_URL}/${posterPath}`}
        alt={titleOrName}
        width={1000}
        height={1000}
      />

      <BannerContent
        titleOrName={titleOrName}
        popularity={popularity}
        voteAverage={voteAverage}
        overview={overview}
      />
    </div>
  );
}
