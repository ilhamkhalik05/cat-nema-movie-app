import Image from 'next/image';
import { BannerContent } from './banner-content';
import { API_BASE_IMG_URL } from '@/lib/api';
import { Movie } from '@/lib/type';

export default async function Banner({ latestMovie }: { latestMovie: Movie }) {
  return (
    <div className="relative">
      <Image
        className="brightness-[0.55] object-cover w-full h-screen"
        src={`${API_BASE_IMG_URL}/${latestMovie.poster_path}`}
        alt={latestMovie.title}
        width={1000}
        height={1000}
      />

      <BannerContent
        title={latestMovie.title}
        popularity={latestMovie.popularity}
        voteAverage={latestMovie.vote_average}
        voteCount={latestMovie.vote_count}
        overview={latestMovie.overview}
      />
    </div>
  );
}
