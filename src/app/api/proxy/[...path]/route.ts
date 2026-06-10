import { NextRequest, NextResponse } from 'next/server';
import { getServerToken } from '@/lib/auth';

const BASE = () => process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

function apiUrl(path: string[], search: string): string {
  return `${BASE()}/${path.join('/')}${search}`;
}

async function authHeaders(token: string | undefined): Promise<HeadersInit> {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const token = await getServerToken();

  const res = await fetch(apiUrl(path, req.nextUrl.search), {
    headers: await authHeaders(token),
    cache: 'no-store',
  });

  if (res.status === 204) return new NextResponse(null, { status: 204 });
  return NextResponse.json(await res.json(), { status: res.status });
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const token = await getServerToken();
  const body = await req.text();

  const res = await fetch(apiUrl(path, ''), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...await authHeaders(token) },
    body,
  });

  if (res.status === 204) return new NextResponse(null, { status: 204 });
  return NextResponse.json(await res.json(), { status: res.status });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const token = await getServerToken();
  const body = await req.text();

  const res = await fetch(apiUrl(path, ''), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...await authHeaders(token) },
    body,
  });

  if (res.status === 204) return new NextResponse(null, { status: 204 });
  return NextResponse.json(await res.json(), { status: res.status });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const token = await getServerToken();

  const res = await fetch(apiUrl(path, ''), {
    method: 'DELETE',
    headers: await authHeaders(token),
  });

  if (res.status === 204) return new NextResponse(null, { status: 204 });
  return NextResponse.json(await res.json(), { status: res.status });
}
