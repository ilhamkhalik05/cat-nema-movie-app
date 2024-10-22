'use client';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useNoScrollPage } from '@/hooks/useNoScrollPage';
import { FaX } from 'react-icons/fa6';
import { Button } from '../@shadcn-ui/button';
import { BrandLogo } from '../brand-logo';
import { Card } from '../@shadcn-ui/card';
import LoginForm from '../login-form';

export default function LoginModal() {
  const { closeLoginModal } = useLoginModal();
  useNoScrollPage();

  return (
    <div
      className={`fixed inset-0 z-50 w-screen h-screen flex items-end sm:items-center justify-center bg-black/80`}
      onClick={closeLoginModal}
    >
      <Card
        className={`z-50 relative px-8 pt-7 pb-10 w-full h-4/5 sm:h-auto rounded-t-3xl animate-slide-up sm:animate-none sm:rounded-md sm:w-2/3 md:w-1/2 lg:w-[40%] -translate-y-10 bg-zinc-950`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <header className="space-y-1.5">
            <BrandLogo containerClassName="flex gap-2" imageClassName="size-8" titleClassName="text-2xl" />
            <p className="text-muted-foreground">Let's sign in to enjoy more feats!</p>
          </header>

          <hr className="my-5 border border-input" />

          <LoginForm />
        </div>

        <Button
          size={'icon'}
          variant={'ghost'}
          className="absolute top-4 right-6 size-7 cursor-pointer"
          onClick={closeLoginModal}
        >
          <FaX size={22} />
        </Button>
      </Card>
    </div>
  );
}
