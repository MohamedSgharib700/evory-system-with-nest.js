import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmployeesModule } from '../employees/employees.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { EmployeesService } from '../employees/employees.service';
import { EmployeesRepository } from '../employees/employees.repository';
import { AuthController } from './auth.controller';
import { SamlStrategy } from './saml/samlStrategy';

@Module({
  imports: [EmployeesModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService , SamlStrategy],
})
export class AuthModule {}
