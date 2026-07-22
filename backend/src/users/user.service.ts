import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UserService {
    constructor (private readonly jwtService:JwtService,
                 private readonly prisma:PrismaService
    ){}

    async getUser(mail:string,accessToken:string){
        
            if(!accessToken){
                throw new UnauthorizedException("Unauthorized User")
            }
            const payload = await this.jwtService.verify(accessToken)
            
           
            if(!mail){
                throw new BadRequestException("mail of user is required")
            }
            const user = await this.prisma.user.findUnique({
                where:{
                    email:mail
                }
            })
            if(!user){
                throw new NotFoundException("User does not exist")
            }

            const {id, email, username} = user
            const userWithoutPassword = {id,email,username}
            return userWithoutPassword
            


            
            
        
        }
}
