import { NextRequest, NextResponse } from 'next/server';

const TOKEN_COOKIE = 'scenauria_token';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

  const regRes = await fetch(`${apiUrl}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!regRes.ok) {
    return NextResponse.json(await regRes.json(), { status: regRes.status });
  }

  const loginRes = await fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: body.email, password: body.password }),
  });

  const data = await loginRes.json();
  if (!loginRes.ok) return NextResponse.json(data, { status: loginRes.status });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(TOKEN_COOKIE, data.accessToken, {
    httpOnly: true, sameSite: 'strict', maxAge: 7 * 24 * 3600, path: '/',
  });
  return res;
}
