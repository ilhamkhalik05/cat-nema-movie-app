import { brandLogo } from '@/lib/assets';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type BrandLogoProps = {
  containerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
};

export function BrandLogo(props: BrandLogoProps) {
  return (
    <div className={cn('flex items-center gap-5', props?.containerClassName)}>
      <div className="rounded-3xl p-2 shadow-lg shadow-zinc-900">
        <Image
          className={cn('size-12 object-contain', props?.imageClassName)}
          src={brandLogo.src}
          alt={'Logo'}
          width={1000}
          height={1000}
        />
      </div>
      <h1 className={cn('text-3xl text-foreground font-[900]', props?.titleClassName)}>CatNema</h1>
    </div>
  );
}
