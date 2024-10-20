'use client';

import { createContext, useState } from 'react';

type TSidenavContext = {
  showSidenav: boolean;
  openSidenav: () => void;
  closeSidenav: () => void;
};

export const SidenavContext = createContext<TSidenavContext>({
  showSidenav: false,
  openSidenav: () => {},
  closeSidenav: () => {},
});

const SidenavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSidenav, setShowSidenav] = useState(false);

  const openSidenav = () => {
    setShowSidenav(true);
  };

  const closeSidenav = () => {
    setShowSidenav(false);
  };

  return (
    <SidenavContext.Provider value={{ showSidenav, openSidenav, closeSidenav }}>{children}</SidenavContext.Provider>
  );
};

export default SidenavContextProvider;
