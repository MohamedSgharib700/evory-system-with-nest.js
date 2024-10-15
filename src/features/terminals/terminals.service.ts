import { Injectable } from '@nestjs/common';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';
import { Terminal } from './entities/terminal.entity';
import { TerminalsRepository } from './terminals.repository';

@Injectable()
export class TerminalsService {

  constructor(private readonly terminalsRepository: TerminalsRepository) {}

  async create(data: Partial<Terminal>): Promise<Terminal> {
    return await this.terminalsRepository.create(data);
  }

  async findAll() {
    return await this.terminalsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.terminalsRepository.findOne(id);
  }

  async update(id: string, updatedTerminal: UpdateTerminalDto): Promise<Terminal> {
    const [, [updatedRecord]] = await this.terminalsRepository.update(id, updatedTerminal);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.terminalsRepository.remove(id) ;
    return {massage : 'The row has been removed successfully'}
   }
}
