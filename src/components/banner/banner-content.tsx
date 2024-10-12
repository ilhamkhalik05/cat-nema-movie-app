import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/button';
import { CiBookmarkPlus } from 'react-icons/ci';
import { PiShootingStarFill } from 'react-icons/pi';
import { FaRegEye } from 'react-icons/fa';

type BannerContentProps = {
  titleOrName: string;
  popularity: number;
  voteAverage: number;
  overview: string;
};

export function BannerContent(props: BannerContentProps) {
  const { titleOrName, popularity, voteAverage, overview } = props;
  return (
    <div className="absolute left-0 top-1/2 translate-y-8 flex flex-col size-full px-8">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl tracking-widest font-[800]">{titleOrName}</h1>

        <div className="flex items-center gap-5 text-gray-200 text-sm">
          <div className="flex items-center gap-2">
            <FaRegEye size={20} className="text-white" />
            <span>{popularity}</span>
          </div>

          <div className="flex items-center gap-2">
            <PiShootingStarFill size={24} className="text-yellow-300" />
            {voteAverage.toFixed(1)}/10
          </div>
        </div>

        <p className="text-foreground/90 w-3/5 break-words">{overview || 'There is no overview for this item'}</p>
      </section>

      <div className="flex items-center gap-3 mt-6">
        <Button variant={'primary'} className="h-11 flex items-center gap-2 bg-red-500">
          <AiOutlinePlayCircle size={24} />
          Watch Now
        </Button>
        <Button variant={'default'} className="h-11 flex items-center gap-2">
          <CiBookmarkPlus size={24} />
          Add to Watch List
        </Button>
      </div>
    </div>
  );
}
