import { createContext,useEffect, useState } from "react";
import { getUserCookie } from "../lib/getUserCookie";
interface User {
    id:'',
    email:'',
    username:''

}

export const UserContext = createContext({
    id:'',
    email:'',
    username:''
})


export default function UserContextProvider(){
    const [user,setUser] = useState<User|undefined>(undefined)
    useEffect(()=>{
        if(user) return 
        
    })
}