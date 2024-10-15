import { Injectable } from '@nestjs/common';
import {Role} from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesRepository {
  constructor(
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) {}
   
  
  async create(data:Partial<Role> ) : Promise<Role> {
    console.log(data);
    
    return await this.roleModel.create(data);
  }
  

  async findAll() {
    return await this.roleModel.findAll();
  }

  async findOne(id: string) {
    return await this.roleModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatedapp: Partial<Role>): Promise<[any, Role[]]> {
    return this.roleModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.roleModel.destroy({
      where: { id: id },
    });
  }
}
