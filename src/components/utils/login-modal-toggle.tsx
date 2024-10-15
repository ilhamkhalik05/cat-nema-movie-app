'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AiOutlineLogin } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/button';
import LoginModal from '../login-modal';

export function LoginModalToggle({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = async () => {
   setShowModal(true)
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        variant={'primary'}
        className={cn('flex items-center gap-1.5 font-[600] lg:rounded-xl tracking-widest px-5', className)}
        onClick={openModalHandler}
      >
        LOGIN
        <AiOutlineLogin size={24} />
      </Button>

      {showModal && <LoginModal closeModalHandler={closeModalHandler} />}
    </>
  );
}
