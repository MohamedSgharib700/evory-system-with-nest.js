import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { Library } from './entities/library.entity';
import { LibrariesRepository } from './libraries.repository';
import { Attachment } from '../attachments/entities/attachment.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class LibrariesService {

  constructor(
    @InjectModel(Library)
    private userModel: typeof Library,private readonly libraryRepositoy : LibrariesRepository ){}

  async create(data: Partial<Library>): Promise<Library> {
    return await this.libraryRepositoy.create(data);
  }

  async findAll(): Promise<Library[]>  {
    return await this.libraryRepositoy.findAll();
  } 
  
  async findOne(id: string) {
    return await this.libraryRepositoy.findOne(id);
  }

  async update(id: string, updatedOffer: Partial<Library>): Promise<Library> {
    const [, [updatedRecord]] = await this.libraryRepositoy.update(id, updatedOffer);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.libraryRepositoy.remove(id);
    return {massage : 'The row has been removed successfully'}
 }
}
