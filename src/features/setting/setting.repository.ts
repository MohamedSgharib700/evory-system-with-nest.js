import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UUID } from 'crypto';

@Injectable()
export class SettingRepository {
  constructor(
    @InjectModel(Setting)
      private settingModel: typeof Setting,
  ) {}

  async create(lang: string, theme: string , employee_id: UUID): Promise<Setting> {
    const setting = new Setting();
    setting.lang = lang;
    setting.theme = theme;
    setting.employee_id = employee_id;
    await setting.save();
    return setting;
  }

  async findAll() {
    const setting = await this.settingModel.findAll();
    return setting ;
  }

  async findOne(id: string) {
    return await this.settingModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatedapp: Partial<Setting>): Promise<[any, Setting[]]> {
    return this.settingModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.settingModel.destroy({
      where: { id: id },
    });
  }
}
