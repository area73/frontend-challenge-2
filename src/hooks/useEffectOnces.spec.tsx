import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useEffectOnce } from './useEffectOnces';

describe('useEffectOnce', () => {
  it('runs the effect only once, even if observedProps change', () => {
    const effect = vi.fn();
    const { rerender } = renderHook(
      ({ props }) => useEffectOnce(effect, [props]),
      {
        initialProps: { props: 'initial' },
      }
    );

    expect(effect).toHaveBeenCalledTimes(1);

    rerender({ props: 'changed' });
    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('does not run the effect again if observedProps do not change', () => {
    const effect = vi.fn();
    const { rerender } = renderHook(
      ({ props }) => useEffectOnce(effect, [props]),
      {
        initialProps: { props: 'initial' },
      }
    );

    expect(effect).toHaveBeenCalledTimes(1);

    rerender({ props: 'initial' });
    expect(effect).toHaveBeenCalledTimes(1);
  });
});
