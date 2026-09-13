import Link from 'next/link';
import { Button } from '@white/ui';

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-display text-6xl font-semibold text-gold-500">403</p>
      <h1 className="text-xl font-semibold text-charcoal-900">You don&apos;t have access to this</h1>
      <p className="max-w-sm text-sm text-charcoal-500">
        Your role doesn&apos;t include the permission needed for this page. Ask a Super Admin to grant it from
        Roles &amp; Permissions.
      </p>
      <Link href="/dashboard">
        <Button>Back to dashboard</Button>
      </Link>
    </div>
  );
}
