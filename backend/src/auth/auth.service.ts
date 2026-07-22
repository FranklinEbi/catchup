
import { Injectable, UnauthorizedException,BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {PrismaService} from "../prisma/prisma.service"
import { CreateUserDTO } from './dto/createuser.dtio';
import bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
    constructor(private readonly jwtService:JwtService,
               private readonly prisma:PrismaService){}

    async signup(userFormDetails:CreateUserDTO){

        const userExists = await this.prisma.user.findUnique({
            where:{
                email:userFormDetails.email
            }
        })

        if(userExists){
            throw new BadRequestException("User with email already exists.")
        }
        const hashedPassword = await bcrypt.hash(userFormDetails.password,10)
        
        const newUser = await this.prisma.user.create({
            data:{...userFormDetails,password: hashedPassword}
        })
        const accessToken = this.jwtService.sign({sub:newUser.id,email:newUser.email},{expiresIn:'1d'})
        const {password, ...userWithoutPassword} = newUser


        return {user:userWithoutPassword,accessToken}
    
    }


    async login(userFormDetails:LoginDto){

        const user = await this.prisma.user.findUnique({
            where:{
                email:userFormDetails.email
            }
        })

        if(!user){
            throw new BadRequestException("Invalid email or password.")
        }

        const isMatch = await bcrypt.compare(userFormDetails.password,user.password)

        if(!isMatch){
            throw new BadRequestException("Invalid email or password.")
        }

        const accessToken = this.jwtService.sign({sub:user.id,email:user.email},{expiresIn:'1d'})
        const {password, ...userWithoutPassword} = user
        
        return {user:userWithoutPassword,accessToken}

    }

    

   
}
