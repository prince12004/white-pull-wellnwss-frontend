import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/login'];

/**
 * UX-only guard: redirects obviously-unauthenticated visitors away from the
 * dashboard before a page even renders. This is NOT the security boundary —
 * every real authorization decision happens server-side via the API's guards
 * (JwtAuthGuard/PermissionsGuard). A forged or expired cookie here just means
 * the user sees a slower redirect once the API call in the layout 401s.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
  const hasAccessToken = request.cookies.has('access_token');

  if (!isPublic && !hasAccessToken) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
