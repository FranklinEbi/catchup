'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { signup } from "./auth"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
export default function Signupcomp(){
   const [name,setName] = useState('')
   const [username,setUserName] = useState('')
   const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)

    async function submit(e:React.SubmitEvent<HTMLFormElement>){
      e.preventDefault()
      setError('')
      setLoading(true)
      try{
  
        await signup({name,username,email,password})
        setLoading(false)
        
      }catch(err:any){
        setError(err.message)
        setLoading(false)
      }finally{
        setLoading(false)
      }
      
  
    }

    return(
        <div>

         <div className="min-h-dvh flex items-center justify-center">
      <form onSubmit={submit} className='w-4/5 p-4 max-w-md bg-card rounded-md'>
       
        <h1 className="text-center text-xl font-bold">Create an account</h1>
        <p className="text-xs text-muted-foreground text-center mt-2 mb-8">Please fill in all fields to create your account.</p>
        {error && <div className="text-sm text-red-600 mb-5">{error}</div>}

        


            <FieldGroup>
              <Field>
                <FieldLabel className="font-medium">
                  Full Name
                </FieldLabel>
                <Input
                  id="fullname"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                  className="p-4"
                  type="text"
                  />
              </Field>

              <Field>
                <FieldLabel className="font-medium">
                  Username
                </FieldLabel>
                <Input
                  id="username"
                  value={username}
                  onChange={(e)=>setUserName(e.target.value)}
                  required
                  className="p-4"
                  type="text"
                  />
              </Field>

              <Field>
                <FieldLabel className="font-medium">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  className="p-4"
                  type="email"
                  />
              </Field>

              <Field>
                <FieldLabel className="font-medium">
                  Password
                </FieldLabel>
                <Input
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="p-4"
                  required
                  type="password"
                  minLength={8}
                  />
                
              </Field>
              <Button type="submit" disabled={loading} className={'p-5  text-sm font-semibold'}>Submit</Button>
            </FieldGroup>
         <FieldSeparator className="mt-6" />
         
         <p className="text-xs mt-1 text-muted-foreground">Already have an account? <Link href={'/login'} className="text-teal-600 font-bold">Log in</Link></p>
      </form>
            
          
         
         
        
        

    </div>

        </div>
    )
}