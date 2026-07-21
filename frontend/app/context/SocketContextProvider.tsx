'use client'
import { createContext, ReactNode } from "react";
import { Socket,io } from "socket.io-client";
import { Dispatch,useState,SetStateAction,useEffect } from "react";

type SocketContextType = {
    socket:Socket | null,
    setSocket:Dispatch<SetStateAction<Socket|null>>

}
export const SocketContext = createContext<SocketContextType|undefined>({
    socket:null,
    setSocket:()=>{}
})

export default function SocketContextProvider({accessToken,children}:{accessToken:string,children:ReactNode}){

    const [socket,setSocket] = useState<Socket|null>(null)

    useEffect(()=>{
        let s: Socket | null = null;
        async function connectUser(){
            
            
            const socket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`,{
                auth:{
                    token:accessToken
                }
            })
            s= socket
            setSocket(socket)
        }

        connectUser()

        return () => {
        s?.disconnect();
        };
        },[])

        return(
            <SocketContext.Provider value={{socket,setSocket}}>
                {children}
            </SocketContext.Provider>
        )
}