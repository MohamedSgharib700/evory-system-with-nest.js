import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsRepository } from './events.repository';
import { Event } from './entities/event.entity';

@Module({
  imports: [SequelizeModule.forFeature([Event])],
  controllers: [EventsController],
  providers: [EventsService , EventsRepository],
})
export class EventsModule {}
