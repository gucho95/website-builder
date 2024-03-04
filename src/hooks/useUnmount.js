import { useEffect } from 'react';

export function useUnmount(fn) {
  useEffect(
    () => fn,
    // eslint-disable-next-line
    []
  );
}
