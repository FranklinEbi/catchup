import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import {UserService} from './user.service'
@Module({
  imports:[AuthModule,PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
