import { getUserCookie } from "../lib/getUserCookie"
import Chat from "./Chatcomp"
export default async function Chatpage(){
  const user = await getUserCookie()
  return (
    <Chat user={user}/>
  )
}