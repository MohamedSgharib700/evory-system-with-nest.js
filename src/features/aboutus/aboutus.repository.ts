import { Injectable } from '@nestjs/common';
import { CreateAboutusDto } from './dto/create-aboutus.dto';
import { UpdateAboutusDto } from './dto/update-aboutus.dto';
import { Aboutus } from './entities/aboutus.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AboutusRepository {
  constructor(
    @InjectModel(Aboutus)
    private aboutusModel: typeof Aboutus,
  ) {}

  async create(data: Partial<Aboutus>): Promise<Aboutus> {
    return await this.aboutusModel.create(data);
  }

  async findAll() {
    
   const aboutus = await this.aboutusModel.findAll();
    return aboutus ;
  }

  async findOne(id: string) {
    return await this.aboutusModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updated: Partial<Aboutus>): Promise<[any, Aboutus[]]> {
    return this.aboutusModel.update(updated, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.aboutusModel.destroy({
      where: { id: id },
    });
  }
}
