import { Controller, Get, Param, Req, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor (private readonly userService:UserService){}

    @Get(':email')
    async getUser(@Req() req:Request,@Param() email:string){
        const accessToken =  req.headers.authorization?.split(' ')[1]
        if(!accessToken){
            throw new UnauthorizedException('Unauthorized user')
        }
        const user = await this.userService.getUser(email,accessToken)
        return user
    }

}
