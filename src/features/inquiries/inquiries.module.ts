import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { InquiriesService } from './inquiries.service';
import { InquiriesController } from './inquiries.controller';
import { InquiriesRepository } from './inquiries.repository';
import { Inquiry } from './entities/inquiry.entity';

@Module({
  imports: [SequelizeModule.forFeature([Inquiry])],
  controllers: [InquiriesController],
  providers: [InquiriesService , InquiriesRepository],
})
export class InquiriesModule {}
