'use client';

import { showMustLoginNotification, showUnavailableFeatureNotification } from '@/lib/toast';
import { Button } from '../@shadcn-ui/button';
import { CiBookmarkPlus } from 'react-icons/ci';
import { useSession } from 'next-auth/react';

export function AddToWatchlist() {
  const { status } = useSession();

  const onAddToWatchlistHandler = () => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') showMustLoginNotification();
    if (status === 'authenticated') showUnavailableFeatureNotification();
  };

  return (
    <Button variant={'default'} className="h-11 flex items-center gap-2" onClick={() => onAddToWatchlistHandler()}>
      <CiBookmarkPlus size={24} />
      Add to Watch List
    </Button>
  );
}
