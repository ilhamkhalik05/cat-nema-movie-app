'use client';

import { useContext } from 'react';
import { SidenavContext } from '@/context/sidenav-context';
import { FaBars } from 'react-icons/fa';
import { Button } from '../@shadcn-ui/button';
import { Sidenav } from './sidenav';

export function SidenavToggle() {
  const { openSidenav } = useContext(SidenavContext);
  return (
    <>
      <Button variant={'ghost'} size={'icon'} className="cursor-pointer" onClick={openSidenav}>
        <FaBars className="text-white" size={24} />
      </Button>

      <Sidenav />
    </>
  );
}
