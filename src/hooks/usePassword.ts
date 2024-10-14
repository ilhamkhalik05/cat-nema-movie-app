import { useState } from 'react';

export function usePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  return { showPassword, togglePasswordHandler };
}
