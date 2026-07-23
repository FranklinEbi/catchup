'use server';

import { cookies } from "next/headers";

export async function getUserCookie():Promise<{id:string,email:string,username:string}> {
  const cookieStore = await cookies();

  const userCookie = cookieStore.get("user")?.value;

  let user = null;

  if (userCookie) {
    try {
      user = JSON.parse(userCookie);
    } catch {
      user = null;
    }
  }

  return user
}