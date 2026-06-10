import { NextResponse } from 'next/server';

const TOKEN_COOKIE = 'scenauria_token';

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(TOKEN_COOKIE, '', { maxAge: 0, path: '/' });
  return res;
}
