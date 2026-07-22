import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import { UserService } from './users/user.service';
import { UserModule } from './users/user.module';



@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
    }),AuthModule, PrismaModule, EventsModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
