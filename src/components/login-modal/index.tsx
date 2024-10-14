'use client';

import LoginForm from '../login-form';
import { Card } from '../@shadcn-ui/card';
import { FaX } from 'react-icons/fa6';
import { Button } from '../@shadcn-ui/button';
import { BrandLogo } from '../brand-logo';
import { useNoScrollPage } from '@/hooks/useNoScrollPage';

export default function LoginModal({ closeModalHandler }: { closeModalHandler: () => void }) {
  useNoScrollPage();
  return (
    <div
      className="fixed inset-0 z-20 w-screen h-screen flex items-center justify-center bg-black/70"
      onClick={(e) => e.stopPropagation()}
    >
      <Card className="z-50 relative px-8 pt-7 pb-10 w-2/3 md:w-1/2 lg:w-[40%] -translate-y-10 rounded-md bg-zinc-950/90">
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
          className="absolute top-3.5 right-3.5 size-7 cursor-pointer"
          onClick={closeModalHandler}
        >
          <FaX size={18} />
        </Button>
      </Card>
    </div>
  );
}
