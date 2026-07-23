'use client'
import { useContext } from "react"
import { ReceiverContext } from "../context/ReceiverContextProvider"

export function useReceiver(){
    const receiver = useContext(ReceiverContext)
    if(!receiver){
        throw new Error("Receiver context not available")
    }

    return receiver

}