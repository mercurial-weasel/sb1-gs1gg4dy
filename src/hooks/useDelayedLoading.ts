import { useState, useEffect } from 'react';

export function useDelayedLoading(isLoading: boolean, delay: number = 1000) {
  const [showLoading, setShowLoading] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
    } else {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isLoading, delay]);

  return showLoading;
}