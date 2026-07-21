'use client'
import { useContext } from "react"
import { SocketContext } from "../context/SocketContextProvider"

export default function useSocket(){
    const socket = useContext(SocketContext)
    if(!socket){
        throw new Error('Socket context not available')
    }

    return socket
}