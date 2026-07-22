'use server';

import { cookies } from "next/headers";

export async function getCookies() {
  const cookieStore = await cookies();

  const userCookie = cookieStore.get("user")?.value;
  const accessToken = cookieStore.get("accessToken")?.value ?? null;

  let user = null;

  if (userCookie) {
    try {
      user = JSON.parse(userCookie);
    } catch {
      user = null;
    }
  }

  return {
    user,
    accessToken
  };
}