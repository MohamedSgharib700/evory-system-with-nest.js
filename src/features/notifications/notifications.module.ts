import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsRepository } from './notifications.repository';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [SequelizeModule.forFeature([Notification])],
  controllers: [NotificationsController],
  providers: [NotificationsRepository,NotificationsService],
})
export class NotificationsModule {}
