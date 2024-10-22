'use client';

import { useNavbarBlur } from '@/hooks/useNavbarBlur';
import { NavMenu } from './nav-menu';
import { BrandLogo } from '../brand-logo';
import { LoginModalToggle } from '../utils/login-modal-toggle';
import { SidenavToggle } from './sidenav-toggle';
import LoginModalContextProvider from '@/context/login-modal-context';
import SidenavContextProvider from '@/context/sidenav-context';

export default function Navbar() {
  const { isScrolled } = useNavbarBlur();

  return (
    <header
      className={`${
        isScrolled && 'backdrop-blur-lg'
      } flex justify-between items-center py-5 px-8 w-full z-10 fixed top-0 transition-all duration-300`}
    >
      <div className="flex items-center gap-14">
        <BrandLogo />

        {/* Hide when on large screen */}
        <div className="hidden lg:block">
          <NavMenu />
        </div>
      </div>

      {/* Showing login modal toggle when on large screen and showing sidenav toggler when small screen */}
      <LoginModalContextProvider>
        <SidenavContextProvider>
          <div className="hidden lg:block">
            <LoginModalToggle />
          </div>

          <div className="block lg:hidden">
            <SidenavToggle />
          </div>
        </SidenavContextProvider>
      </LoginModalContextProvider>
    </header>
  );
}
