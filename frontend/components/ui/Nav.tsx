'use client'
import { usePathname } from "next/navigation"
export default function Nav(){
    const pathName = usePathname()
    return(
         <nav className="px-5">
            <header className={ pathName.startsWith('/chat/')?'hidden': `text-lg font-bold`}>Catchup</header>
        </nav>)
}