'use client';

import { AiOutlineLogout } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/button';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';
import { LOGOUT_SUCCESS_MESSAGE } from '@/lib/const';
import { cn } from '@/lib/utils';

export function LogoutButton({ className }: { className?: string }) {
  const onSignoutHandler = async () => {
    await signOut()
      .then(() => toast.error(LOGOUT_SUCCESS_MESSAGE))
      .catch((err) => toast.error(err.message));
  };

  return (
    <Button
      variant={'primary'}
      className={cn('flex items-center gap-1.5 font-[600] lg:rounded-xl tracking-widest px-5', className)}
      onClick={onSignoutHandler}
    >
      <AiOutlineLogout size={24} />
      LOGOUT
    </Button>
  );
}
