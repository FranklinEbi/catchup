'use server';

import { getCookies } from './getCookies';

export async function getUser(email: string) {
  const { accessToken } = await getCookies();

  const response = await fetch(
    `${process.env.BACKEND_URL}/user?email=${encodeURIComponent(email)}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}