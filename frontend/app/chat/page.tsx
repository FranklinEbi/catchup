'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { logout } from "../lib/logout"
export default function Home(){


  return(<div className="h-dvh px-4">
    <div className="flex justify-between items-center ">
      <h1 className="mt-7 text-4xl text-teal-600 font-black">Chat</h1>
      <div onClick={()=>logout()} className=" cursor-pointer self-end text-red-600 font-medium">Logout</div>
    </div>
      <div className="flex mt-2 ">
        <Input className="p-4"/>
        <Button className={'p-4 bg-teal-600'}>Search</Button>
      </div>
  
  </div>
  )}