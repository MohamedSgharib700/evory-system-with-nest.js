import { Injectable } from '@nestjs/common';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { UpdateInquiryDto } from './dto/update-inquiry.dto';
import { InquiriesRepository } from './inquiries.repository';
import { Inquiry } from './entities/inquiry.entity';

@Injectable()
export class InquiriesService {

  constructor(private readonly inquiriesRepositoy : InquiriesRepository ){}

    async create(createinquiriesDto: CreateInquiryDto): Promise<Inquiry> {
      const { type , content_ar , content_en} = createinquiriesDto;
      const app = await this.inquiriesRepositoy.create(type,content_ar , content_en);
    return app;
  }

  async findAll() {
    return await this.inquiriesRepositoy.findAll();
  }


  async findOne(id: string) {
    return await this.inquiriesRepositoy.findOne(id);
  }

  async update(id: string, updateInquiryDto: UpdateInquiryDto): Promise<Inquiry> {
    const [, [updatedRecord]] = await this.inquiriesRepositoy.update(id, updateInquiryDto);
    return updatedRecord;
  }

  async remove(id: string) {
  await this.inquiriesRepositoy.remove(id) ;
  return {massage : 'The row has been removed successfully'}
  }

}
