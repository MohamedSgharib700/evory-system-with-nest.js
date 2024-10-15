import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmergencyContactsService } from './emergency.contacts.service';
import { EmergencyContactsController } from './emergency.contacts.controller';
import { EmergencyContactsRepository } from './emergency.contacts.repository';
import { EmergencyContact } from './entities/emergency.contact.entity';

@Module({
  imports: [SequelizeModule.forFeature([EmergencyContact])],
  controllers: [EmergencyContactsController],
  providers: [EmergencyContactsService , EmergencyContactsRepository ],
})
export class EmergencyContactsModule {}
