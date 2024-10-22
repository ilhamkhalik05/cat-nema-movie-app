'use client';

import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/ui/button';
import { showUnavailableFeatureNotification } from '@/lib/toast';

export function WatchMovie() {
  return (
    <Button
      variant={'primary'}
      className="h-11 flex items-center gap-2 bg-red-500"
      onClick={() => showUnavailableFeatureNotification()}
    >
      <AiOutlinePlayCircle size={24} />
      Watch Now
    </Button>
  );
}
