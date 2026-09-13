import Link from 'next/link';
import { Button } from '@white/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-display text-6xl font-semibold text-peach-500">404</p>
      <h1 className="text-xl font-semibold text-charcoal-900">Page not found</h1>
      <Link href="/dashboard">
        <Button>Back to dashboard</Button>
      </Link>
    </div>
  );
}
