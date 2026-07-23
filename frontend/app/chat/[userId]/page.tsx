import { getUserCookie } from "@/app/lib/getUserCookie";
import MainChatComp from "./MainChatComp";

export default async function MainChat(){
    const user = await getUserCookie()

    return <MainChatComp user={user} />
}