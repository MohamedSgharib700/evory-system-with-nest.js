import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttachmentsService } from './attachments.service';
import { AttachmentsController } from './attachments.controller';
import { AttachmentsRepository } from './attachments.repository';
import { Attachment } from './entities/attachment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Attachment])],
  controllers: [AttachmentsController],
  providers: [AttachmentsService , AttachmentsRepository],
})
export class AttachmentsModule {}
