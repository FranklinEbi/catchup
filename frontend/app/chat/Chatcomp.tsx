'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { logout } from "../lib/logout"
import { getUser } from "../lib/getUserByEmail"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01FreeIcons } from "@hugeicons/core-free-icons";
import Link from "next/link"
import { useReceiver } from "../hooks/useReceiver"

export interface User{
    id:string,
    email:string,
    username:string
}

export default function Chat({user}:{user:User}){
    const [email,setEmail] = useState('')
    const [fetchedUser,setFetchedUser] = useState<User|null>(null)
    const [error,setError] = useState('')
    const {setReceiver} = useReceiver()


    async function findUser(mail:string){
        
        try{
            setError('')
            const trimmedMail = mail.trim().toLowerCase()
            if (!trimmedMail) {
              throw new Error('Email is required');
            }
            setFetchedUser(null)
            if(trimmedMail ===user.email.toLowerCase()){
              throw new Error("You can't search for yourself")
            }
            const res = await getUser(trimmedMail)
            setFetchedUser(res)

        }catch(error:any){
            setError(error.message)
        }
    }

  return(<div className="h-dvh px-6">
    <div className="flex justify-between items-center mb-3">
      <h1 className="mt-7 text-4xl text-teal-600 font-black">Chat</h1>
      <div onClick={()=>logout()} className=" cursor-pointer self-end text-red-600 text-sm mr-2 font-medium">Logout</div>
    </div>
      <div className="flex mt-2 ">
        <Input value={email} placeholder="Enter user's email" type="email" onChange={(e)=>setEmail(e.target.value)} className="p-4" required/>
        <Button onClick={()=>findUser(email)} className={'p-4 bg-teal-600'}>Search</Button>
      </div>
      {error && <p className="text-xs ml-1 text-red-600 font-medium">{error}</p>}
      {fetchedUser && <Link onClick={()=>setReceiver({sub:fetchedUser.id,email:fetchedUser.email})} href={`/chat/${fetchedUser.id}`} className="border-3 border-teal-600 rounded-md p-2 block text-sm mt-4 w-fit font-semibold text-teal-600"><p>{fetchedUser.email} <HugeiconsIcon className="inline" icon={ArrowRight01FreeIcons} size={20} /> </p></Link>}
  
  </div>
  )}