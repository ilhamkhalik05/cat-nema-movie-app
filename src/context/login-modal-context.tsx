'use client';

import { createContext, useState } from 'react';

type TLoginModalContext = {
  showLoginModal: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
};

export const LoginModalContext = createContext<TLoginModalContext>({
  showLoginModal: false,
  openLoginModal: () => {},
  closeLoginModal: () => {},
});

const LoginModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <LoginModalContext.Provider value={{ showLoginModal, openLoginModal, closeLoginModal }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalContextProvider;
