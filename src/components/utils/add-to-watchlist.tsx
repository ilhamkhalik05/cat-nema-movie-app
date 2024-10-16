'use client';

import { showUnavailableFeatureNotification } from '@/lib/toast';
import { Button } from '../@shadcn-ui/button';
import { CiBookmarkPlus } from 'react-icons/ci';

export function AddToWatchlist() {
  return (
    <Button
      variant={'default'}
      className="h-11 flex items-center gap-2"
      onClick={() => showUnavailableFeatureNotification()}
    >
      <CiBookmarkPlus size={24} />
      Add to Watch List
    </Button>
  );
}
