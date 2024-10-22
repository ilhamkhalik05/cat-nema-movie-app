'use client';

import { useSidenav } from '@/hooks/useSidenav';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { FaTv } from 'react-icons/fa';
import { IoMdList } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { showMustLoginNotification } from '@/lib/toast';
import Link from 'next/link';

export function NavMenu() {
  const { closeSidenav } = useSidenav();
  const { data: session } = useSession();
  const pathname = usePathname();

  const navMenuList = [
    {
      title: 'Home',
      icon: LuLayoutDashboard,
      link: '/',
      isProtected: false,
    },
    {
      title: 'TV Series',
      icon: FaTv,
      link: '/tv-series',
      isProtected: false,
    },
    {
      title: 'Movies',
      icon: MdOutlineLocalMovies,
      link: '/movies',
      isProtected: false,
    },
    {
      title: 'Watch List',
      icon: IoMdList,
      link: '/watchlist',
      isProtected: true,
    },
  ];

  const configIcon = (Icon: IconType) => {
    return <Icon size={20} />;
  };

  const renderNavMenuListItem = () => {
    return navMenuList.map((menu, idx) => {
      const menuIcon = configIcon(menu.icon);
      const activeClass = 'text-foreground font-bold border-foreground';
      const isPathMatches = menu.link === pathname || (menu.link !== '/' && pathname.startsWith(menu.link));
      const className = cn(
        'flex items-center gap-2.5 transition-all duration-200 select-none border-b lg:border-none pb-2',
        isPathMatches ? activeClass : 'text-foreground/80 hover:text-foreground border-foreground/30',
      );

      const isNotLoginAndProtectedRoute = menu.isProtected && !session;

      // Show must login notification when unauthenticated user access the protected routes
      if (isNotLoginAndProtectedRoute) {
        return (
          <button key={idx} className={className} onClick={() => showMustLoginNotification()}>
            {menuIcon}
            {menu.title}
          </button>
        );
      }

      return (
        <Link key={idx} href={menu.link} className={className} onClick={closeSidenav}>
          {menuIcon}
          {menu.title}
        </Link>
      );
    });
  };

  return <nav className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">{renderNavMenuListItem()}</nav>;
}
