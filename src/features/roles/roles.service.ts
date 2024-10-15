import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesRepository } from './roles.repository';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: RolesRepository) {}

  async create(data: Partial<Role>): Promise<Role> {
    return await this.rolesRepository.create(data);
  }

  async findAll() {
    return await this.rolesRepository.findAll();
  }

  async findOne(id: string) {
    return await this.rolesRepository.findOne(id);
  }

  async update(id: string, updatedapp: UpdateRoleDto): Promise<Role> {
    const [, [updatedRecord]] = await this.rolesRepository.update(id, updatedapp);
    return updatedRecord;
  }

  async remove(id: string) {
     await this.rolesRepository.remove(id);
     return { message: 'The row has been removed successfully' };
  }
}
