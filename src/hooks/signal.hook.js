import { useState, useEffect } from 'react';

/**
 * useSignal
 * @returns {AbortSignal=}
 */
function useSignal() {
  const [signal, setSignal] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setSignal(controller.signal);

    return () => {
      controller.abort('Component destroyed...');
    };
  }, []);

  return signal;
}

export default useSignal;
