import { cookies } from 'next/headers';

export const TOKEN_COOKIE = 'scenauria_token';

export async function getServerToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_COOKIE)?.value;
}
