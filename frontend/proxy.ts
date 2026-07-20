import {NextRequest, NextResponse} from "next/server";


export async function proxy(request:NextRequest){
    const accessToken =  request.cookies.get("accessToken")?.value;
    const refreshToken =  request.cookies.get("refreshToken")?.value;
    const user =  request.cookies.get("user")?.value;

    if(!accessToken && !refreshToken && !user){
        return NextResponse.redirect(new URL('/login',request.url))
    }

    return NextResponse.next();


}


export const config = {
    matcher:['/']
}