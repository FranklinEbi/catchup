import {IsString, IsNotEmpty, IsEmail, Length} from 'class-validator'

export class CreateUserDTO{
    @IsNotEmpty()
    @IsString()
    @Length(2,30)
    name!:string

    @IsNotEmpty()
    @IsEmail()
    @Length(5)
    email!:string

    
    @IsString()
    @Length(8)
    password!:string

    @IsNotEmpty()
    @IsString()
    @Length(2,30)
    username!:string

}