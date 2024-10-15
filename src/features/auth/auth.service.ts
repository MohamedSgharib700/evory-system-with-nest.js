import { Injectable  } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EmployeesService } from '../employees/employees.service';
import { Employee } from '../employees/entities/employee.entity';

@Injectable()
export class AuthService {
  constructor(private employeesService : EmployeesService ,
  
) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.employeesService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}