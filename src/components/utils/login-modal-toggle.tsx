'use client';

import { LOGOUT_SUCCESS_MESSAGE } from '@/lib/const';
import { useContext } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { LoginModalContext } from '@/context/login-modal-context';
import { cn } from '@/lib/utils';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/button';
import { toast } from 'react-toastify';
import LoginModal from '../login-modal';

export function LoginModalToggle({ className }: { className?: string }) {
  const { status } = useSession();
  const { showLoginModal, openLoginModal } = useContext(LoginModalContext);

  const onSignoutHandler = async () => {
    await signOut({ redirect: false }).then(() => toast.error(LOGOUT_SUCCESS_MESSAGE));
  };

  if (status === 'authenticated')
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
