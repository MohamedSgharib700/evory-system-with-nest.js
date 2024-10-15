import { Injectable } from '@nestjs/common';
import { CreateAboutusDto } from './dto/create-aboutus.dto';
import { UpdateAboutusDto } from './dto/update-aboutus.dto';
import { AboutusRepository } from './aboutus.repository';
import { Aboutus } from './entities/aboutus.entity';

@Injectable()
export class AboutusService {

  constructor(private readonly aboutusRepositoy : AboutusRepository ){}

  async create(data: Partial<Aboutus>): Promise<Aboutus> {
    return await this.aboutusRepositoy.create(data);
  }

  async findAll() {
    return await this.aboutusRepositoy.findAll();
  }

  async findOne(id: string) {
    return await this.aboutusRepositoy.findOne(id);
  }

  async update(id: string, update: UpdateAboutusDto): Promise<Aboutus> {
    const [, [updatedRecord]] = await this.aboutusRepositoy.update(id, update);
    return updatedRecord;
  }

  async remove(id: string) {
     await this.aboutusRepositoy.remove(id);
     return {massage : 'The row has been removed successfully'}
  }
}
