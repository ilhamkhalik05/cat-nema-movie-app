import { AiOutlineLogin } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/button';
import { NavMenu } from './nav-menu';
import { BrandLogo } from '../brand-logo';

export default function Navbar() {
  return (
    <header className="z-10 fixed top-0 flex justify-between items-center py-5 px-8 backdrop-blur-lg w-full">
      {/* Left Side */}
      <div className="flex items-center gap-14">
        <BrandLogo />
        <NavMenu />
      </div>

      {/* Right Side */}
      <Button variant={'primary'} className="px-5 flex items-center gap-1.5 font-[600] rounded-xl tracking-widest">
        LOGIN
        <AiOutlineLogin size={24} />
      </Button>
    </header>
  );
}
