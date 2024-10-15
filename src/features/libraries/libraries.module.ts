import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Library } from './entities/library.entity';
import { LibrariesService } from './libraries.service';
import { LibrariesController } from './libraries.controller';
import { LibrariesRepository } from './libraries.repository';

@Module({
  imports: [SequelizeModule.forFeature([Library])],
  controllers: [LibrariesController],
  providers: [LibrariesService ,LibrariesRepository],
})
export class LibrariesModule {}
