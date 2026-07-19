import {IsString, IsEmpty, IsEmail, Length} from 'class-validator'

export class CreateUserDTO{
    @IsEmpty()
    @IsString()
    @Length(2,30)
    name!:string

    @IsEmpty()
    @IsEmail()
    @Length(5)
    email!:string

    
    @IsString()
    @Length(8)
    password!:string

    @IsEmpty()
    @IsString()
    @Length(2,30)
    username!:string

}