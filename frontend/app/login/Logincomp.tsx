'use client'
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Logincomp(){
    return(

        <div className="relative min-h-dvh">
       
    <div className="min-h-dvh flex items-center justify-center">
      <form className='w-4/5 p-4 max-w-md bg-card rounded-md'>
       
        <h1 className="text-center text-xl font-bold">Login account</h1>
        <p className="text-xs text-muted-foreground text-center mt-2 mb-8">Please fill in all fields to access your account.</p>

            <FieldGroup>
              <Field>
                <FieldLabel className="font-medium">
                  Email
                </FieldLabel>
                <Input
                  id="email"
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
                  className="p-4"
                  required
                  type="password"
                  />
                
              </Field>
              <Button className={'p-5  text-sm font-semibold'}>Log in</Button>
            </FieldGroup>
            
          
         
         <FieldSeparator className="mt-6" />
         
         <p className="text-xs text-muted-foreground mt-1">Don't have an account? <Link href={'/signup'} className="text-teal-600 font-bold">Sign up</Link></p>
         
        
        
      </form>
    </div>
    </div>
                )
                }