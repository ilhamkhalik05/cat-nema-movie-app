import Image from 'next/image';
import { BannerContent } from './banner-content';
import { API_BASE_IMG_URL } from '@/lib/env';
import { MovieDetails, TVSeriesDetails } from '@/lib/type';

type BannerProps = {
  bannerType: 'tv-series' | 'movie';
  item: MovieDetails | TVSeriesDetails;
};

export default function Banner({ bannerType, item }: BannerProps): React.ReactNode {
  const isMovie = bannerType === 'movie';
  const titleOrName = isMovie ? (item as MovieDetails).title : (item as TVSeriesDetails).name;
  const posterPath = isMovie ? (item as MovieDetails).poster_path : (item as TVSeriesDetails).poster_path;
  const popularity = item.popularity;
  const voteAverage = item.vote_average;
  const overview = item.overview;

  return (
    <div className="relative">
      <Image
        className="brightness-[0.55] object-cover object-center w-full h-screen select-none"
        src={`${API_BASE_IMG_URL}/${posterPath}`}
        alt={titleOrName}
        width={3800}
        height={3800}
      />

      <BannerContent titleOrName={titleOrName} popularity={popularity} voteAverage={voteAverage} overview={overview} />
    </div>
  );
}
