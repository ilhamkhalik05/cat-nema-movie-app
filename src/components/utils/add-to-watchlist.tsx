'use client';

import { showMustLoginNotification } from '@/lib/toast';
import { Button } from '../@shadcn-ui/ui/button';
import { CiBookmarkPlus } from 'react-icons/ci';
import { useSession } from 'next-auth/react';
import { postMovieToWatchlist } from '@/services/movie';
import { toast } from 'react-toastify';
import { postTVSeriesToWatchlist } from '@/services/tv';
import { useRouter } from 'next/navigation';

type AddToWatchlistProps = { itemType: 'movie' | 'tv-series'; itemId: number };

export function AddToWatchlist(props: AddToWatchlistProps) {
  const { itemType, itemId } = props;
  const { data: session } = useSession();
  const router = useRouter();
  const sessionId = session?.user?.id as string;

  const onAddToWatchlistHandler = async () => {
    if (!session) showMustLoginNotification();

    const isMovie = itemType === 'movie';

    const res = isMovie
      ? await postMovieToWatchlist(itemId, sessionId)
      : await postTVSeriesToWatchlist(itemId, sessionId);

    if (res?.status === 'FAILED') {
      toast.error(res?.message || 'Failed to add this item to watchlist');
    } else {
      toast.success(res?.message || 'Success add this item to watchlist');
    }

    router.refresh();
  };

  return (
    <Button variant={'default'} className="h-11 flex items-center gap-2" onClick={() => onAddToWatchlistHandler()}>
      <CiBookmarkPlus size={24} />
      Add to Watch List
    </Button>
  );
}
