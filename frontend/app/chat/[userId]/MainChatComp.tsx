'use client'
import useSocket from "@/app/hooks/useSocket"
import { useState,useEffect } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {  ArrowLeft } from "@hugeicons/core-free-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useQuery } from "@tanstack/react-query"
import { getUserById } from "@/app/lib/getUserById"
import {User} from "../Chatcomp"
interface Message {
    text:string,
    sender:string
}
export default function MainChatComp({user}:{user:User}){
    const params = useParams()
    const router = useRouter()
    const {socket} = useSocket()
    const [messages,setMessages] = useState<Message[]>([])
    const [message,setMessage] = useState('')

    
    
    const receiverId = params.userId as string

    

    const query = useQuery({queryKey:['id',receiverId],queryFn:()=> getUserById(receiverId)})
        
        
    const sendMessage = (e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const trimmedMessage = message.trim()
        if(!trimmedMessage){
            return
        }
        socket?.emit('message',{message:trimmedMessage,receiver:{sub:receiverId,email:receiver?.email}})
        setMessages((prev)=>[...prev,{text:trimmedMessage,sender:user.email}])
        setMessage('')

    }

    const receiver = query.data

    useEffect(()=>{
        
        const handleMessage = (data:{message:string,sender:{sub:string,email:string}})=>{
            setMessages(prev=>[...prev,{text:data.message,sender:data.sender.email}])
        }

        socket?.on('message',handleMessage)

        return()=>{
            socket?.off('message',handleMessage)
        }

    },[socket])
  
   



    return(<div className="relative h-fit">
        <nav className="fixed w-full flex items-center gap-x-10 shadow-lg p-2">
            <HugeiconsIcon onClick={()=>router.push('/chat')} icon={ArrowLeft} size={20} />
            <h1 className="text-teal-600 font-semibold">{receiver?.email}
                </h1>
        </nav>
        <div className="h-dvh ">
        <div>
            {messages.map((message,index)=>(
                <div key={index}>
                    {message.text}
                    </div>
            ))}
        </div>
        <form onSubmit={sendMessage} className="fixed bottom-0 w-full flex">
            <Input value={message} onChange={(e)=>setMessage(e.target.value)} className="p-4" />
            <Button type="submit" className={'bg-teal-600 text-white w-1/4 p-4'}>Send</Button>
        </form>

        </div>

    </div>)
    



}