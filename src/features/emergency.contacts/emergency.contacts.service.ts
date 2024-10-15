import { Injectable } from '@nestjs/common';
import { CreateEmergencyContactDto } from './dto/create-emergency.contact.dto';
import { UpdateEmergencyContactDto } from './dto/update-emergency.contact.dto';
import { EmergencyContactsRepository } from './emergency.contacts.repository';
import { EmergencyContact } from './entities/emergency.contact.entity';

@Injectable()
export class EmergencyContactsService {

constructor(private readonly emergencyContatsRepositoy : EmergencyContactsRepository ){}

async create(CreateEmergencyContactDto: CreateEmergencyContactDto): Promise<EmergencyContact> {
    const { name_ar , name_en , kinship, phone , employee_id } = CreateEmergencyContactDto;
    const emergency = await this.emergencyContatsRepositoy.create(name_ar,name_en,kinship , phone , employee_id);
  return emergency;
}

async findAll() {
  return await this.emergencyContatsRepositoy.findAll();
}

async findOne(id: string) {
  return await this.emergencyContatsRepositoy.findOne(id);
}

async update(id: string, updatedEmergenceContact: UpdateEmergencyContactDto): Promise<EmergencyContact> {
  const [, [updatedRecord]] = await this.emergencyContatsRepositoy.update(id, updatedEmergenceContact);
  return updatedRecord;
}

async remove(id: string) {
  await this.emergencyContatsRepositoy.remove(id) ;
  return {massage : 'The row has been removed successfully'}
 }
}
