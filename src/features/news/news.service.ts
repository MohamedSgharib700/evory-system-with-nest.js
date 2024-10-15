import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsRepository } from './news.repository';
import { News } from './entities/news.entity';
 


@Injectable()
export class NewsService {
  
  
  constructor(private readonly NewsRepository : NewsRepository ){}

  async create(data: Partial<News>): Promise<News> {
    return await this.NewsRepository.create(data);
  }

  async findAll(): Promise<News[]> {
    return await this.NewsRepository.findAll();
  }

  async findAllForHomePage() {
    return await this.NewsRepository.findAllForHomePage();
  }

  async findOne(id: string) {
    return await this.NewsRepository.findOne(id);
  }

  async update(id: string, updatedNew: UpdateNewsDto): Promise<News> {
    const [, [updatedRecord]] = await this.NewsRepository.update(id, updatedNew);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.NewsRepository.remove(id);
    return { message: 'The row has been removed successfully' };
  }
}
