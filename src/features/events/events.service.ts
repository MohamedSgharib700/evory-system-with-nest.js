import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService {

  constructor(private readonly eventsRepository : EventsRepository ){}

  async create(data: Event): Promise<Event> {
    return await this.eventsRepository.create(data);
  }

  async findAll() {
    return await this.eventsRepository.findAll();
  }

  async findAllForHomePage() {
    return await this.eventsRepository.findAllForHomePage();
  }

  async findOne(id: string) {
    return await this.eventsRepository.findOne(id);
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  async remove(id: string) {
    await this.eventsRepository.remove(id);
    return { message: 'The row has been removed successfully' };
  }
}
