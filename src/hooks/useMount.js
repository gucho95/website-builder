import { useEffect } from 'react';

export function useMount(fn) {
  useEffect(() => {
    fn();
    // eslint-disable-next-line
  }, []);
}
