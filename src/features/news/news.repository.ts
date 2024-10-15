import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Attachment } from '../attachments/entities/attachment.entity';

@Injectable()
export class NewsRepository {
  constructor(
    @InjectModel(News)
    private NewModel: typeof News,
  ) {}

  async create(data: Partial<News>): Promise<News> {
    return await this.NewModel.create(data);
  }

  async findAll() {
    
   const news = await this.NewModel.findAll({ include:{ model: Attachment }});
    return news ;
  }

  async findAllForHomePage() {
    return await this.NewModel.findAll({ where: { display_hp: 1 } });
  }

  async findOne(id: string , ) {
    return await this.NewModel.findOne({where: { id: id },include:{ model: Attachment } });
  }

  async update(id: string, updatedapp: Partial<News>): Promise<[any, News[]]> {
    return this.NewModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.NewModel.destroy({
      where: { id: id },
    });
  }
}
