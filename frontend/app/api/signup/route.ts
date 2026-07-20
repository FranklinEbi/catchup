import { NextRequest } from "next/server";


export async function POST(request:NextRequest){
    const body = await request.json()
    const res = await fetch(`${process.env.BACKEND_URL}/auth/signup`,{
        method:'POST',

        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)

    })

   return res


}