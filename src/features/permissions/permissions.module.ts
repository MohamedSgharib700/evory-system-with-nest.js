import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { PermissionsRepository } from './permissions.repository';
import { Permission } from './entities/permission.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Permission])],
  controllers: [PermissionsController],
  providers: [PermissionsService,PermissionsRepository],
})
export class PermissionsModule {}
