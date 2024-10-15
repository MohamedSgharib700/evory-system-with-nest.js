import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PermissionsRepository {
  constructor(
    @InjectModel(Permission)
    private permissionModel: typeof Permission,
  ) {}

  async create(data: Partial<Permission>): Promise<Permission> {
    return await this.permissionModel.create(data);
  }

  async findAll() {
    return await this.permissionModel.findAll();
  }

  async findOne(id: string) {
    return await this.permissionModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} list`;
  }

  async remove(id: string) {
    await this.permissionModel.destroy({
      where: { id: id },
    });
  }
}
