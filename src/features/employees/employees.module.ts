import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [SequelizeModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [EmployeesRepository,EmployeesService],
  exports: [EmployeesService],
})
export class EmployeesModule {}
