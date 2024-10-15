import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TerminalsService } from './terminals.service';
import { TerminalsController } from './terminals.controller';
import { TerminalsRepository } from './terminals.repository';
import { Terminal } from './entities/terminal.entity';

@Module({
  imports: [SequelizeModule.forFeature([Terminal])],
  controllers: [TerminalsController],
  providers: [TerminalsRepository,TerminalsService],
})
export class TerminalsModule {}
