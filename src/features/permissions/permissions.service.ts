import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import { PermissionsRepository } from './permissions.repository';

@Injectable()
export class PermissionsService {
  
 constructor(private readonly permissionRepositoy : PermissionsRepository ){}

 async create(data: Partial<Permission>): Promise<Permission> {
    return await this.permissionRepositoy.create(data);
  }

  async findAll() {
    return await this.permissionRepositoy.findAll() ;
  }

 async findOne(id: string) {
    return await this.permissionRepositoy.findOne(id);
  }

  async update(id: string, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

 async remove(id: string) {
     await this.permissionRepositoy.remove(id);
     return { message: 'The row has been removed successfully' };
  }
}
