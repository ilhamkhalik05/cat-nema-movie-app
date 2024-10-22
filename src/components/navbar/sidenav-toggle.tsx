'use client';

import { useSidenav } from '@/hooks/useSidenav';
import { FaBars } from 'react-icons/fa';
import { Button } from '../@shadcn-ui/button';
import { Sidenav } from './sidenav';

export function SidenavToggle() {
  const { openSidenav } = useSidenav();
  return (
    <>
      <Button variant={'ghost'} size={'icon'} className="cursor-pointer" onClick={openSidenav}>
        <FaBars className="text-white" size={24} />
      </Button>

      <Sidenav />
    </>
  );
}
