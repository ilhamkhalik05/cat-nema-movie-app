import { NavMenu } from './nav-menu';
import { BrandLogo } from '../brand-logo';
import { LoginButton } from '../utils/login-button';
import { SidenavToggle } from './sidenav-toggle';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-5 px-8 backdrop-blur-lg w-full z-10 fixed top-0">
      <div className="flex items-center gap-14">
        <BrandLogo />

        {/* Hide when on large screen */}
        <div className="hidden lg:block">
          <NavMenu />
        </div>
      </div>

      {/* Showing login modal toggle when on large screen and showing sidenav toggler when small screen */}
      <div className="hidden lg:block">
        <LoginButton />
      </div>

      <div className="block lg:hidden">
        <SidenavToggle />
      </div>
    </header>
  );
}
