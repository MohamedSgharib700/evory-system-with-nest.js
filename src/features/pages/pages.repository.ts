import { Injectable } from '@nestjs/common';
import { Page } from './entities/page.entity';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PagesRepository {
  constructor(
    @InjectModel(Page)
    private pageModel: typeof Page,
  ) {}
   
  
  async create(data:Partial<Page> ) : Promise<Page> {
    return await this.pageModel.create(data);
  }
  

  async findAll() {
    return await this.pageModel.findAll();
  }

  async findOne(id: string) {
    return await this.pageModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatedapp: Partial<Page>): Promise<[any, Page[]]> {
    return this.pageModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.pageModel.destroy({
      where: { id: id },
    });
  }
}
