import {NextRequest, NextResponse} from "next/server";


export async function proxy(request:NextRequest){
    const accessToken =  request.cookies.get("accessToken")?.value;
    const user =  request.cookies.get("user")?.value;

    if(!accessToken || !user){
        return NextResponse.redirect(new URL('/login',request.url))
    }

    return NextResponse.next();


}


export const config = {
    matcher:['/','/chat']
}