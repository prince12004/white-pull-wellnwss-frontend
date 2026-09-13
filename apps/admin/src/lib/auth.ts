import { cookies } from 'next/headers';
import type { Role } from '@white/types';

const NEST_API_URL = process.env.NEST_API_URL ?? 'http://localhost:4000/api';

export interface Session {
  id: string;
  name: string;
  email: string;
  roleKey: string;
  role: Role | null;
  permissions: string[];
}

/**
 * Server-side session lookup. Runs on the Next.js server, so Next's browser-facing
 * rewrites don't apply here — we call the NestJS API directly and forward the
 * incoming request's cookies by hand.
 */
export async function getSession(): Promise<Session | null> {
  const cookieStore = cookies();
  const cookieHeader = cookieStore.toString();
  if (!cookieHeader) return null;

  try {
    const res = await fetch(`${NEST_API_URL}/auth/me`, {
      headers: { Cookie: cookieHeader },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return (await res.json()) as Session;
  } catch {
    return null;
  }
}

export { hasPermission } from './permissions';
