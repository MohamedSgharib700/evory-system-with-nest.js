import { Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { Attachment } from './entities/attachment.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AttachmentsRepository {
  constructor(
    @InjectModel(Attachment)
    private AttachmentModel: typeof Attachment,
  ) {}

  async create(data: Partial<Attachment>): Promise<Attachment> {
    return await this.AttachmentModel.create(data);
  }

  async findAll() {
   const Attachments = await this.AttachmentModel.findAll();
   
    return Attachments ;
  }

  async findOne(id: string) {
    return await this.AttachmentModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updatePermissionDto: UpdateAttachmentDto) {
    return `This action updates a #${id} list`;
  }

  async remove(id: string) {
    await this.AttachmentModel.destroy({
      where: { id: id },
    });
  }
}
