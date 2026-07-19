import { Controller, Post, HttpCode, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { CreateUserDTO } from "./dto/createuser.dtio";


@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}

    @HttpCode(200)
    @Post('login')
    async loginUser(@Body() userFormDetails:LoginDto){
       const user =  await this.authService.login(userFormDetails)
       return user
    }

    @Post('signup')
    async signup(@Body() userFormDetails:CreateUserDTO){
        const user = await this.authService.signup(userFormDetails)
    }

}