import { useEffect, useState } from 'react';

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, value]);
  return debouncedValue;
}
