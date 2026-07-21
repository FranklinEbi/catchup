import Logincomp from "./Logincomp"
import { getCookies } from "../lib/getCookies"
import {redirect} from 'next/navigation'
export default async function LoginPage() {
  try {
    const { user, accessToken, refreshToken } = await getCookies();
    
    if (user && accessToken && refreshToken) {
      redirect("/chat");
    }
  } catch {
    // User is not logged in, continue to signup page.
  }
  return  <Logincomp />
}
