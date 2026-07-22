// app/actions/logout.ts
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete('user');
  cookieStore.delete('accessToken');
 

  redirect('/login');
}