'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@white/ui';
import { NAV_SECTIONS } from './nav-config';
import type { Session } from '@/lib/auth';
import { hasPermission } from '@/lib/permissions';

export function Sidebar({ session }: { session: Session }) {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-ivory-200 bg-white md:block">
      <div className="flex h-16 items-center border-b border-ivory-200 px-6">
        <span className="font-display text-lg font-semibold text-charcoal-900">White Admin</span>
      </div>
      <nav className="flex flex-col gap-6 overflow-y-auto px-3 py-6">
        {NAV_SECTIONS.map((section) => {
          const visibleItems = section.items.filter((item) => hasPermission(session, item.permission));
          if (visibleItems.length === 0) return null;

          return (
            <div key={section.label}>
              <p className="px-3 text-xs font-semibold uppercase tracking-wide text-charcoal-300">
                {section.label}
              </p>
              <div className="mt-2 flex flex-col gap-0.5">
                {visibleItems.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium',
                        isActive ? 'bg-peach-100 text-peach-800' : 'text-charcoal-700 hover:bg-ivory-100',
                      )}
                    >
                      {item.label}
                      {item.status === 'placeholder' && (
                        <span className="rounded-full bg-gold-100 px-2 py-0.5 text-[10px] font-semibold text-gold-700">
                          Soon
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
