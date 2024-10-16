'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { FaTv } from 'react-icons/fa';
import { IoMdList } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineLocalMovies } from 'react-icons/md';

export function NavMenu() {
  const pathname = usePathname();

  const navMenuList = [
    {
      title: 'Home',
      icon: LuLayoutDashboard,
      link: '/',
      available: true,
    },
    {
      title: 'TV Series',
      icon: FaTv,
      link: '/tv-series',
      available: true,
    },
    {
      title: 'Movies',
      icon: MdOutlineLocalMovies,
      link: '/movies',
      available: true,
    },
    {
      title: 'Watch List',
      icon: IoMdList,
      link: '/watchlist',
      available: true,
    },
  ];

  const configIcon = (Icon: IconType) => {
    return <Icon size={20} />;
  };

  return (
    <nav className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
      {navMenuList.map((menu, idx) => {
        const menuIcon = configIcon(menu.icon);
        const isPathMatches = menu.link === pathname || (menu.link !== '/' && pathname.includes(menu.link));
        const activeClass = 'text-foreground font-bold border-foreground';

        return (
          <Link
            key={idx}
            href={menu.available ? menu.link : ''}
            className={cn(
              'flex items-center gap-2.5 transition-all duration-200 select-none border-b lg:border-none pb-2',
              isPathMatches ? activeClass : 'text-foreground/80 hover:text-foreground border-foreground/30',
            )}
          >
            {menuIcon}
            {menu.title}
          </Link>
        );
      })}
    </nav>
  );
}
