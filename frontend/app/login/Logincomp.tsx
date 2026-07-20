'use client'
import {  SubmitEventHandler, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {login} from'./auth'


export default function Logincomp(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)

  async function submit(e:React.SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    setError('')
    setLoading(true)
    try{
       await login({email,password})
       setLoading(false)
      
    }catch(err:any){
      setError(err.message)
      setLoading(false)
    }

  }
    return(

        <div className="relative min-h-dvh">
       
    <div className="min-h-dvh flex items-center justify-center">

      <form onSubmit={submit} className='w-4/5 p-4 max-w-md bg-card rounded-md'>
       
        <h1 className="text-center text-xl font-bold">Login account</h1>
        <p className="text-xs text-muted-foreground text-center mt-2 mb-8">Please fill in all fields to access your account.</p>

        {error && <div className="text-red-600 text-sm mb-5">{error}</div>}

            <FieldGroup>
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
                  />
                
              </Field>
              <Button disabled={loading} type='submit' className={'p-5  text-sm font-semibold'}>Log in</Button>
            </FieldGroup>
            
          
         
         <FieldSeparator className="mt-6" />
         
         <p className="text-xs text-muted-foreground mt-1">Don't have an account? <Link href={'/signup'} className="text-teal-600 font-bold">Sign up</Link></p>
         
        
        
      </form>
    </div>
    </div>
                )
                }