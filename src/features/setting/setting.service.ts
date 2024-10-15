import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingRepository } from './setting.repository';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingService {

  constructor(private readonly settingRepositoy : SettingRepository ){}

  async create(createSettingDto: CreateSettingDto): Promise<Setting> {
    const { lang , theme , employee_id } = createSettingDto;
    const setting  = await this.settingRepositoy.create(lang,theme,employee_id);
  return setting;
}

async findAll() {
  return await this.settingRepositoy.findAll();
}

async findOne(id: string) {
  return await this.settingRepositoy.findOne(id);
}

async update(id: string, updatedSetting: UpdateSettingDto): Promise<Setting> {
  const [, [updatedRecord]] = await this.settingRepositoy.update(id, updatedSetting);
  return updatedRecord;
}

async remove(id: string) {
  await this.settingRepositoy.remove(id) ;
  return {massage : 'The row has been removed successfully'}
 }
}
