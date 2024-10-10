'use client';

import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { FaTv } from 'react-icons/fa';
import { IoMdList } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineLocalMovies } from 'react-icons/md';

export function NavMenu() {
  const navMenuList = [
    {
      title: 'Home',
      icon: IoHomeOutline,
      link: '/',
      available: true,
    },
    {
      title: 'TV Series',
      icon: FaTv,
      link: '/tv-series',
      available: false,
    },
    {
      title: 'Movies',
      icon: MdOutlineLocalMovies,
      link: '/movies',
      available: false,
    },
    {
      title: 'Watch List',
      icon: IoMdList,
      link: '/movies',
      available: false,
    },
  ];

  const configIcon = (Icon: IconType) => {
    return <Icon size={20} />;
  };

  return (
    <nav className="flex items-center gap-6">
      {navMenuList.map((menu, idx) => {
        const menuIcon = configIcon(menu.icon);
        return (
          <Link
            key={idx}
            href={menu.available ? menu.link : ''}
            className="flex items-center gap-2.5 text-foreground/90 hover:text-foreground transition-colors duration-100"
          >
            {menuIcon}
            {menu.title}
          </Link>
        );
      })}
    </nav>
  );
}
