'use server';

import { getCookies } from './getCookies';

export async function getUserById(id: string) {
  const { accessToken } = await getCookies();

  const response = await fetch(
    `${process.env.BACKEND_URL}/user/id:${encodeURIComponent(id)}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  
  if (!response.ok) {
      const data = await response.json();
    throw new Error(data.message);
  }
  const data:{id:string,email:string,username:string} = await response.json()
  return data;
}