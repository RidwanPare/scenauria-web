import { NextRequest, NextResponse } from 'next/server';

const TOKEN_COOKIE = 'scenauria_token';
const PROTECTED_PREFIXES = ['/dashboard', '/places', '/visits', '/captures', '/analytics', '/settings'];
const AUTH_PAGES = ['/login', '/register'];

export function middleware(req: NextRequest): NextResponse {
  const token = req.cookies.get(TOKEN_COOKIE)?.value;
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some(p => pathname.startsWith(p));
  const isAuthPage = AUTH_PAGES.some(p => pathname.startsWith(p));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
