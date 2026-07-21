import { IsString } from "class-validator"


export class PayloadDTO{
    message!:string
    receiver!:UserDTO
    
}

export class UserDTO{
    @IsString()
    sub!:string

    @IsString()
    email!:string
}
