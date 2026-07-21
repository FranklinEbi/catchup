'use server'
import { cookies } from "next/headers"
import {redirect} from 'next/navigation'
export interface LoginType {
    email:string,
    password:string
} 
export async function login(data:LoginType){
    if(!data.email || !data.password){
        throw new Error("All Fields are required")
    }

    const response = await fetch(`${process.env.FRONTEND_URL}/api/login`,{
        method:'POST',
        
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

    })

    if(!response.ok){
        const error =await response.json()
        throw new Error(error.message)
    }

   const {user,accessToken,refreshToken } = await response.json()
    const cookieStore = await cookies()

    cookieStore.set('user',JSON.stringify(user),{
        httpOnly:true,
        secure:process.env.NODE_ENV ==='production',
        sameSite:"lax"
    })
    cookieStore.set('accessToken',accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV ==='production',
        sameSite:"lax"
    })
    cookieStore.set('refreshToken',refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV ==='production',
        sameSite:"lax"
    })

    redirect('/')
}