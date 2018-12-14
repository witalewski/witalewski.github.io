import { useEffect } from 'react';

export const useWindowEffect = handler =>
  useEffect(() => {
    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  });
