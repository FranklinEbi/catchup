import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[JwtModule],
  providers: [EventsGateway]
})
export class EventsModule {}
