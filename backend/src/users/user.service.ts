import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UserService {
    constructor (private readonly jwtService:JwtService,
                 private readonly prisma:PrismaService
    ){}
    private verifyAccessToken(accessToken: string) {
        if (!accessToken) {
            throw new UnauthorizedException('Unauthorized user');
        }

        try {
            return this.jwtService.verify(accessToken);
        } catch {
            throw new UnauthorizedException('Unauthorized user');
        }
        }

    async getUserByEmail(mail:string,accessToken:string){
        
             this.verifyAccessToken(accessToken)
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

            const {password, ...userWithoutPassword} = user
            return userWithoutPassword
            


            
            
        
        }

        async getUserById(userId:string,accessToken:string){

            this.verifyAccessToken(accessToken)
            if(!userId){
                throw new BadRequestException('User not specified')
            }
            
            const user = await this.prisma.user.findUnique({
                where:{
                    id:userId
                }
            })
            
            if(!user){
                throw new NotFoundException("User does not exist")
            }
            
            
            const {password, ...userWithoutPassword} = user
            return userWithoutPassword
            

        }
}
