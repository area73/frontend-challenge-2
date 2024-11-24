import { useEffect, useRef } from 'react';

interface EffectCallback {
  (): void;
}

/**
 * @desription Custom hook that ensures the effect runs only once, even if we use
 * React.StrictMode in dev mode.
 * React’s Strict Mode in development intentionally runs some lifecycle methods
 * (including useEffect) twice for debugging purposes. This behavior is meant to help developers
 * identify unexpected side effects.
 * @see https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development
 * @param {Function} effect - The effect callback to run.
 */
export const useEffectOnce = (
  effect: EffectCallback,
  observedProps: unknown[] | [] = []
): void => {
  const effectRan = useRef<boolean>(false); // Track whether the effect ran

  useEffect(() => {
    if (effectRan.current) return; // Early return, Prevent subsequent runs
    effectRan.current = true; // Mark the effect as executed
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, observedProps); // Ensure effect and observedProps are dependencies
};
