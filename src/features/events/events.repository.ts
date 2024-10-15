import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Attachment } from '../attachments/entities/attachment.entity';

@Injectable()
export class EventsRepository {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
  ) {}

  async create(data: Partial<Event>): Promise<Event> {
    return await this.eventModel.create(data);
  }

  async findAll() {
   const events = await this.eventModel.findAll({ include:{ model: Attachment }});
    return events 
  }

  async findAllForHomePage() {
    return await Event.findAll({ where: { display_hp: 1 } });
  }

  async findOne(id: string) {
    return await this.eventModel.findOne({
      where: { id: id },
      include:{ model: Attachment }
    });
  }

  async update(id: string, updatePermissionDto: UpdateEventDto) {
    return `This action updates a #${id} list`;
  }

  async remove(id: string) {
    await this.eventModel.destroy({
      where: { id: id },
    });
  }
}
