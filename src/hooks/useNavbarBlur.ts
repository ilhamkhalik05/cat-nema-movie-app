import { useEffect, useState } from 'react';

export function useNavbarBlur() {
  const [isScrolled, setIsScrolled] = useState(false);
  const blurClassName = 'backdrop-blur-lg';
  const ACTIVE_BLUR_HEIGHT = 80;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > ACTIVE_BLUR_HEIGHT) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, blurClassName };
}
