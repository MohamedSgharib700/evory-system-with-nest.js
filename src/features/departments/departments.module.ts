import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { DepartmentsRepository } from './departments.repository';
import { Department } from './entities/department.entity';

@Module({
  imports: [SequelizeModule.forFeature([Department])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService , DepartmentsRepository],
})
export class DepartmentsModule {}
