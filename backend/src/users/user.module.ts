import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [UserController,JwtModule]
})
export class UsersModule {}
