import Image from 'next/image';
import { Movie } from '@/lib/type';
import { Card, CardContent, CardTitle } from '../@shadcn-ui/card';
import { getApiImage } from '@/lib/utils';
import { fallbackCardImage } from '@/lib/assets';
import { BrandLogo } from '../brand-logo';
import { PiShootingStarFill } from 'react-icons/pi';

export default function MovieCardList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {movies.map((movie, idx) => (
        <Card key={idx} className="group relative cursor-pointer h-40">
          {/* Backdrop Movie Image */}
          <Image
            className="size-full object-cover rounded-xl group-hover:brightness-[0.45] transition-all duration-200"
            src={movie.backdrop_path ? getApiImage(movie.backdrop_path) : fallbackCardImage.src}
            alt="Error occurred"
            width={500}
            height={500}
          />

          {/* Movie Content */}
          <CardContent className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-0 size-full flex flex-col gap-1.5 justify-center items-center py-0 px-3">
            {/* Movie Title */}
            <CardTitle className="text-center text-white text-lg leading-none">{movie.title}</CardTitle>

            {/* Movie Rated */}
            <div className="flex items-center gap-2 text-sm text-foreground/85">
              <PiShootingStarFill size={20} className="text-yellow-300" />
              {movie.vote_average.toFixed(1)}/10
            </div>
          </CardContent>

          {/* Left Bottom Brand Logo  */}
          <BrandLogo
            containerClassName="opacity-0 group-hover:opacity-85 transition-all duration-200 absolute left-0 bottom-0 flex items-center gap-1 p-0.5"
            imageClassName="size-6 object-contain rounded-xl shadow-3xl shadow-black"
            titleClassName="text-sm font-[600]"
          />
        </Card>
      ))}
    </div>
  );
}
