import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { Library } from './entities/library.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Attachment } from '../attachments/entities/attachment.entity';
import { Department } from '../departments/entities/department.entity';

@Injectable()
export class LibrariesRepository {
  constructor(
    @InjectModel(Library)
    private libraryModel: typeof Library,
  ) {}

  async create(data: Partial<Library>): Promise<Library> {
    return await this.libraryModel.create(data);
  }

  async findAll() {
   const libraries = await this.libraryModel.findAll({ include:[{ model: Attachment }]});
   
    return libraries ;
  }

  async findOne(id: string) {
    return await this.libraryModel.findOne({
      where: { id: id },include:{ model: Attachment }
    });
  }

  async update(id: string, updated: Partial<Library>): Promise<[number, Library[]]> {
    return this.libraryModel.update(updated, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.libraryModel.destroy({
      where: { id: id },
    });
  }
}
