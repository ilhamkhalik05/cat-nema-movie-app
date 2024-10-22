'use client';

import { useSidenav } from '@/hooks/useSidenav';
import { FaX } from 'react-icons/fa6';
import { BrandLogo } from '../brand-logo';
import { LoginModalToggle } from '../utils/login-modal-toggle';
import { NavMenu } from './nav-menu';

export function Sidenav() {
  const { showSidenav, closeSidenav } = useSidenav();
  return (
    <div
      className={`${
        showSidenav ? 'animate-slide-left' : 'animate-slide-left-reverse'
      } z-30 fixed inset-0 w-screen h-screen py-5 px-8 bg-zinc-950/95`}
    >
      <div className="flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <FaX size={24} onClick={closeSidenav} />
        </header>

        <NavMenu />
        <LoginModalToggle className="mt-4 self-start px-8" />
      </div>
    </div>
  );
}
