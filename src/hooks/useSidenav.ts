import { SidenavContext } from '@/context/sidenav-context';
import { useContext } from 'react';

export function useSidenav() {
  const context = useContext(SidenavContext);

  if (!context) {
    throw new Error('Sidenav hook must be inside the Sidenav Context Provider');
  }

  return context;
}
