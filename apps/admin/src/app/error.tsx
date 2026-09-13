'use client';

import { useEffect } from 'react';
import { Button } from '@white/ui';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-display text-6xl font-semibold text-peach-500">500</p>
      <h1 className="text-xl font-semibold text-charcoal-900">Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
