import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepository } from './employees.repository';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {

  constructor(private readonly employeesRepositoy : EmployeesRepository ){}

  async create(createEmployeeDto : CreateEmployeeDto ): Promise<Employee> {

    const { name_ar, name_en , email , password , phone , address , department_id , date_of_birth , start_date , status } = createEmployeeDto;
      const employee = await this.employeesRepositoy.create(name_ar, name_en , email , password , phone , address , department_id , date_of_birth , start_date , status);
      
    return employee;
  }

  async findAll() {
    return await this.employeesRepositoy.findAll();
  }

  async findAllWithoutDepartment(): Promise<Employee[]> {
    return this.employeesRepositoy.findAllWithoutDepartment();
  }

  async findOne(id: string) {
    return await this.employeesRepositoy.findOne(id);
  }

  async findOneMail(id: string) {
    return await this.employeesRepositoy.findOneMail(id);
  }

  async update(id: string, updatedEmployee: Partial<Employee>): Promise<Employee> {
    const [, [updatedRecord]] = await this.employeesRepositoy.update(id, updatedEmployee);
    return updatedRecord;
  }


  async remove(id: string) {
     await this.employeesRepositoy.remove(id);
     return {massage : 'The row has been removed successfully'}
  }
}
