import { Injectable } from '@nestjs/common';
import {Terminal} from './entities/terminal.entity';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TerminalsRepository {
  constructor(
    @InjectModel(Terminal)
    private terminalModel: typeof Terminal,
  ) {}
   
  
  async create(data:Partial<Terminal> ) : Promise<Terminal> {
    return await this.terminalModel.create(data);
  }
  

  async findAll() {
    return await this.terminalModel.findAll();
  }

  async findOne(id: string) {
    return await this.terminalModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatedapp: Partial<Terminal>): Promise<[any, Terminal[]]> {
    return this.terminalModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.terminalModel.destroy({
      where: { id: id },
    });
  }
}
