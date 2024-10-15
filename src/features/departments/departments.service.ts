import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentsRepository } from './departments.repository';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(private readonly departmentsRepository: DepartmentsRepository) {}

  async create(data: Partial<Department>): Promise<Department> {
    return await this.departmentsRepository.create(data);
  }

  async findAll() {
    return await this.departmentsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.departmentsRepository.findOne(id);
  }

  async update(id: string, updatedapp: UpdateDepartmentDto): Promise<Department> {
    const [, [updatedRecord]] = await this.departmentsRepository.update(id, updatedapp);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.departmentsRepository.remove(id) ;
    return {massage : 'The row has been removed successfully'}
   }
}
