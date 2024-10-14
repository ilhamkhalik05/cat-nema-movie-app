'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Button } from '../@shadcn-ui/button';
import { Sidenav } from './sidenav';

export function SidenavToggle() {
  const [showSidenav, setShowSidenav] = useState(false);

  const openSidenavHandler = () => {
    setShowSidenav(true);
  };

  const closeSidenavHandler = () => {
    setShowSidenav(false);
  };

  return (
    <>
      <Button variant={'ghost'} size={'icon'} className='cursor-pointer' onClick={() => openSidenavHandler()}>
        <FaBars className="text-white" size={24} />
      </Button>

      <Sidenav showSidenav={showSidenav} closeSidenavHandler={closeSidenavHandler} />
    </>
  );
}
