'use client';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { AiOutlineLogin } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/button';
import { LogoutButton } from './logout-button';
import LoginModal from '../login-modal';

export function LoginModalToggle({ className }: { className?: string }) {
  const { status } = useSession();
  const { showLoginModal, openLoginModal } = useLoginModal();

  if (status === 'loading') return;
  if (status === 'authenticated') return <LogoutButton className={className} />;

  return (
    <>
      <Button
        variant={'primary'}
        className={cn('flex items-center gap-1.5 font-[600] lg:rounded-xl tracking-widest px-5', className)}
        onClick={openLoginModal}
      >
        LOGIN
        <AiOutlineLogin size={24} />
      </Button>

      {showLoginModal && <LoginModal />}
    </>
  );
}
