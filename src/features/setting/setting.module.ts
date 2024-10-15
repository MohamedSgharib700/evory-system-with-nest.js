import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { SettingRepository } from './setting.repository';
import { Setting } from './entities/setting.entity';

@Module({
  imports: [SequelizeModule.forFeature([Setting])],
  controllers: [SettingController],
  providers: [SettingRepository,SettingService],
})
export class SettingModule {}
