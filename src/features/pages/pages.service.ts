import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from './entities/page.entity';
import { PagesRepository } from './pages.repository';

@Injectable()
export class PagesService {

  constructor(private readonly pagesRepository: PagesRepository) {}

  async create(data: Partial<Page>): Promise<Page> {
    return await this.pagesRepository.create(data);
  }

  async findAll() {
    return await this.pagesRepository.findAll();
  }

  async findOne(id: string) {
    return await this.pagesRepository.findOne(id);
  }

  async update(id: string, updatedapp: UpdatePageDto): Promise<Page> {
    const [, [updatedRecord]] = await this.pagesRepository.update(id, updatedapp);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.pagesRepository.remove(id) ;
    return {massage : 'The row has been removed successfully'}
   }
}
