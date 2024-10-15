import { Injectable } from '@nestjs/common';
import { Department } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DepartmentsRepository {
  constructor(
    @InjectModel(Department)
    private departmentModel: typeof Department,
  ) {}
   
  
  async create(data:Partial<Department> ) : Promise<Department> {
    return await this.departmentModel.create(data);
  }
  

  async findAll() {
    return await this.departmentModel.findAll();
  }

  async findOne(id: string) {
    return await this.departmentModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatedapp: Partial<Department>): Promise<[any, Department[]]> {
    return this.departmentModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.departmentModel.destroy({
      where: { id: id },
    });
  }
}
