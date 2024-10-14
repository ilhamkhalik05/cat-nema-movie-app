import { NavMenu } from './nav-menu';
import { BrandLogo } from '../brand-logo';
import { LoginButton } from '../utils/login-button';

export default function Navbar() {
  return (
    <header className="z-10 fixed top-0 flex justify-between items-center py-5 px-8 backdrop-blur-lg w-full">
      {/* Left Side */}
      <div className="flex items-center gap-14">
        <BrandLogo />
        <NavMenu />
      </div>

      {/* Right Side */}
      <LoginButton />
    </header>
  );
}
