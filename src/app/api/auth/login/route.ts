import { NextRequest, NextResponse } from 'next/server';

const TOKEN_COOKIE = 'scenauria_token';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiUrl = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

  const apiRes = await fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await apiRes.json();

  if (!apiRes.ok) {
    return NextResponse.json(data, { status: apiRes.status });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(TOKEN_COOKIE, data.accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 3600,
    path: '/',
  });
  return res;
}
