import { Injectable } from '@nestjs/common';
import { CreateEmergencyContactDto } from './dto/create-emergency.contact.dto';
import { UpdateEmergencyContactDto } from './dto/update-emergency.contact.dto';
import { EmergencyContact } from './entities/emergency.contact.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UUID } from 'crypto';

@Injectable()
export class EmergencyContactsRepository {
  constructor(
    @InjectModel(EmergencyContact)
      private emergencyContatModel: typeof EmergencyContact,
  ) {}

  async create(name_ar: string, name_en: string, kinship: string, phone: string , employee_id: UUID): Promise<EmergencyContact> {
    const emergency = new EmergencyContact();
    emergency.name_ar = name_ar;
    emergency.name_en = name_en;
    emergency.kinship = kinship;
    emergency.phone = phone;
    emergency.employee_id = employee_id;
    await emergency.save();
    return emergency;
  }

  async findAll() {
    // console.log("I AM HERE");
    const emergencies = await this.emergencyContatModel.findAll();
    return emergencies ;
    
  }

  async findOne(id: string) {
    return await this.emergencyContatModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatedapp: Partial<EmergencyContact>): Promise<[any, EmergencyContact[]]> {
    return this.emergencyContatModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.emergencyContatModel.destroy({
      where: { id: id },
    });
  }
}
