import { cn } from '@/lib/utils';

export default function Loader() {
  const baseLoaderClassName =
    'relative size-14 rounded-full inline-block border-t-4 border-t-white border-r-4 border-r-transparent animate-rotation';

  const afterLoaderClassName =
    "after:content-[''] after:absolute after:left-0 after:top-0 after:size-14 after:rounded-full after:border-l-4 after:border-orange-600 after:border-b-4 after:border-b-transparent after:animate-rotation-reverse";

  return <span className={cn(baseLoaderClassName, afterLoaderClassName)}></span>;
}
