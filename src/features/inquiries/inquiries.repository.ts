import { Injectable } from '@nestjs/common';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { UpdateInquiryDto } from './dto/update-inquiry.dto';
import { Inquiry } from './entities/inquiry.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Attachment } from '../attachments/entities/attachment.entity';

@Injectable()
export class InquiriesRepository {
  constructor(
    @InjectModel(Inquiry)
    private inquiryModel: typeof Inquiry,
  ) {}

  async create(type: string, content_ar: string , content_en): Promise<Inquiry> {
    const inquiry = new Inquiry();
    inquiry.type = type;
    inquiry.content_ar = content_ar;
    inquiry.content_en = content_en;
    await inquiry.save();
    return inquiry;
  }

  async findAll() {
    const inquiry = await this.inquiryModel.findAll({ include:{ model: Attachment }});
    return inquiry ;
    
  }

  async findOne(id: string) {
    return await this.inquiryModel.findOne({
      include:{ model: Attachment },
      where: { id: id },
    });
  }

  async update(id: string, updatedInquiry: Partial<Inquiry>): Promise<[any, Inquiry[]]> {
    return this.inquiryModel.update(updatedInquiry, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.inquiryModel.destroy({
      where: { id: id },
    });
  }
}
