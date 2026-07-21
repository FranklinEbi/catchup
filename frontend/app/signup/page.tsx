import Signupcomp from "./Signupcomp";
import { redirect } from "next/navigation";
import { getCookies } from "../lib/getCookies";

export default async function SignupPage(){
    try {
        const { user, accessToken, refreshToken } = await getCookies();

        if (user && accessToken && refreshToken) {
        redirect("/chat");
        }
    } catch {
        // User is not logged in, continue to signup page.
    }

    return <Signupcomp />
}