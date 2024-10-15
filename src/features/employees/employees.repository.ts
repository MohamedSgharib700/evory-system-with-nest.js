import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from '../departments/entities/department.entity';
import { Setting } from '../setting/entities/setting.entity';
import { EmergencyContact } from '../emergency.contacts/entities/emergency.contact.entity';

@Injectable()
export class EmployeesRepository {
  constructor(
    @InjectModel(Employee)
    private employeeModel: typeof Employee,
  ) {}

  async create(name_ar : string , name_en : string , email : string , password : string ,
    phone : string, address : string , department_id : string  , date_of_birth : string ,
     start_date : string , status : number ): Promise<Employee> {

    const employee = new Employee();
    employee.name_ar = name_ar;
    employee.name_en = name_en;
    employee.email = email;
    employee.password = password;
    employee.phone = phone;
    employee.address = address;
    employee.department_id = department_id;
    employee.date_of_birth = date_of_birth;
    employee.start_date = start_date;
    employee.status = status;
    await employee.save();

    return employee ; 
  }

  async findAll() {
   const employees = await this.employeeModel.findAll({ include:[{ model: Department } , { model: Setting } , { model: EmergencyContact }]});
    return employees ;
  }
  
  async findAllWithoutDepartment(){

    const employees = await this.employeeModel.findAll({ where: {department_id: null,},include:[{ model: Department } ]});
    return employees ;
  }

  async findOne(id: string) {
    return await this.employeeModel.findOne({
      where: { id: id }, include:[{ model: Department } , { model: Setting } , { model: EmergencyContact }]
    });
  }

  async findOneMail(id: string) {
    return await this.employeeModel.findOne({
      where: { id: id },
      attributes: ['email'], // Select only the email field
    });
  }

  async update(id: string, updatedEmployee: Partial<Employee>): Promise<[number, Employee[]]> {
    return this.employeeModel.update(updatedEmployee, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.employeeModel.destroy({
      where: { id: id },
    });
  }
}
