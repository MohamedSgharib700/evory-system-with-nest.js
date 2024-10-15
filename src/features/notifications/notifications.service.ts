import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationsRepository } from './notifications.repository';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationsService {
  constructor(private readonly notificationsRepository: NotificationsRepository) {}

  async create(data: Partial<Notification>): Promise<Notification> {
    return await this.notificationsRepository.create(data);
  }

  async findAll() {
    return await this.notificationsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.notificationsRepository.findOne(id);
  }

  async update(id: string, update: UpdateNotificationDto): Promise<Notification> {
    const [, [updatedRecord]] = await this.notificationsRepository.update(id, update);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.notificationsRepository.remove(id) ;
    return {massage : 'The row has been removed successfully'}
   }
}
