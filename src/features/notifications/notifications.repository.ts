import { Injectable } from '@nestjs/common';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NotificationsRepository {
  constructor(
    @InjectModel(Notification)
    private notificationModel: typeof Notification,
  ) {}
   
  
  async create(data:Partial<Notification> ) : Promise<Notification> {
    return await this.notificationModel.create(data);
  }
  

  async findAll() {
    return await this.notificationModel.findAll();
  }

  async findOne(id: string) {
    return await this.notificationModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, update: Partial<Notification>): Promise<[any, Notification[]]> {
    return this.notificationModel.update(update, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.notificationModel.destroy({
      where: { id: id },
    });
  }
}
