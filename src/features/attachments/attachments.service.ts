import { Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { AttachmentsRepository } from './attachments.repository';
import { Attachment } from './entities/attachment.entity';

@Injectable()
export class AttachmentsService {

  constructor(private readonly attachmentRepositoy : AttachmentsRepository ){}

  async create(data: Partial<Attachment>): Promise<Attachment> {
    return await this.attachmentRepositoy.create(data);
  }

  async findAll() {
    return await this.attachmentRepositoy.findAll();
  }

  async findOne(id: string) {
    return await this.attachmentRepositoy.findOne(id);
  }

  update(id: number, updateAttachmentDto: UpdateAttachmentDto) {
    return `This action updates a #${id} attachment`;
  }

  async remove(id: string) {
    return this.remove(id);
  }
}
