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
export default function Signupcomp(){

    return(
        <div>

         <div className="min-h-dvh flex items-center justify-center">
      <form className='w-4/5 p-4 max-w-md bg-card rounded-md'>
       
        <h1 className="text-center text-xl font-bold">Create an account</h1>
        <p className="text-xs text-muted-foreground text-center mt-2 mb-8">Please fill in all fields to create your account.</p>

            <FieldGroup>
              <Field>
                <FieldLabel className="font-medium">
                  Full Name
                </FieldLabel>
                <Input
                  id="fullname"
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
                  id="fullname"
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
              <Button className={'p-5  text-sm font-semibold'}>Submit</Button>
            </FieldGroup>
            
          
         
         <FieldSeparator className="mt-6" />
         
         <p className="text-xs mt-1 text-muted-foreground">Already have an account? <Link href={'/login'} className="text-teal-600 font-bold">Log in</Link></p>
         
        
        
      </form>

    </div>

        </div>
    )
}