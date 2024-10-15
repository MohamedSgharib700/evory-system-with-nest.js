import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerminalsService } from './terminals.service';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';

@Controller('terminals')
export class TerminalsController {
  constructor(private readonly terminalsService: TerminalsService) {}

  @Post()
  create(@Body() createTerminalDto: CreateTerminalDto) {
    return this.terminalsService.create(createTerminalDto);
  }

  @Get()
  findAll() {
    return this.terminalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terminalsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerminalDto: UpdateTerminalDto) {
    return this.terminalsService.update(id, updateTerminalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terminalsService.remove(id);
  }
}
