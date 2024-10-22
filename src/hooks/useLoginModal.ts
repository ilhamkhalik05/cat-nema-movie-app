import { LoginModalContext } from '@/context/login-modal-context';
import { useContext } from 'react';

export function useLoginModal() {
  const context = useContext(LoginModalContext);

  if (!context) {
    throw new Error('Login modal hook must be inside the Login Modal Context Provider');
  }

  return context;
}
