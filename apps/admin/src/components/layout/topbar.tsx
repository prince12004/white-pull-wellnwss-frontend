'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@white/ui';
import { apiClient } from '@/lib/api-client';
import type { Session } from '@/lib/auth';

export function Topbar({ session }: { session: Session }) {
  const router = useRouter();

  async function handleLogout() {
    await apiClient.post('/auth/logout');
    router.replace('/login');
    router.refresh();
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-ivory-200 bg-white px-6">
      <div />
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-charcoal-900">{session.name}</p>
          <p className="text-xs text-charcoal-500">{session.roleKey}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </header>
  );
}
