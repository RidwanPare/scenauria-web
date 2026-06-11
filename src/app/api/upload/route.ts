import { NextRequest, NextResponse } from 'next/server';
import { getServerToken } from '@/lib/auth';

const BASE = () => process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

// Forward multipart (vidéo) vers l'API — le proxy générique ne gère que le JSON
export async function POST(req: NextRequest) {
  const token = await getServerToken();
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await req.formData();

  const res = await fetch(`${BASE()}/uploads/video`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  return NextResponse.json(await res.json(), { status: res.status });
}
