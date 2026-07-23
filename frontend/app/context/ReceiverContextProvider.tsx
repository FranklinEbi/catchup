'use client'
import { createContext, Dispatch, ReactNode, SetStateAction,useState } from "react";

export type Receiver = {
    sub:string,
    email:string
}
type ReceiverContextType = {
    receiver:Receiver|null,
    setReceiver:Dispatch<SetStateAction<Receiver|null>>
}
export const ReceiverContext = createContext<ReceiverContextType>({
    receiver:{
        sub:'',
        email:''
    },
    setReceiver:()=>{}
    
})


export default function ReceiverContextProvider({children}:{children:ReactNode}){
    const [receiver,setReceiver] = useState<Receiver|null>(null)

    
    return(
        <ReceiverContext.Provider value={{
    receiver,
    setReceiver,
  }}>
            {children}
        </ReceiverContext.Provider>
    )

}