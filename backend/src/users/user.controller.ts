import { Controller, Get, Query, Req, UnauthorizedException,BadRequestException } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor (private readonly userService:UserService){}

    @Get()
    async getUser(
    @Req() req: Request,
    @Query('userId') userId?: string,
    @Query('email') email?: string,
    ) {
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) {
        throw new UnauthorizedException('Unauthorized user');
    }

    if (userId) {
        return this.userService.getUserById(userId, accessToken);
    }

    if (email) {
        return this.userService.getUserByEmail(email, accessToken);
    }

    throw new BadRequestException(
        'Provide either userId or email',
    );
    }

}
