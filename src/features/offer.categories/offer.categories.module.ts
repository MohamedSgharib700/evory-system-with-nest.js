import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OfferCategoriesService } from './offer.categories.service';
import { OfferCategoriesController } from './offer.categories.controller';
import { OfferCategoriesRepository } from './offer.categories.repository';
import { OfferCategory } from './entities/offer.category.entity';

@Module({
  imports: [SequelizeModule.forFeature([OfferCategory])],
  controllers: [OfferCategoriesController],
  providers: [OfferCategoriesRepository , OfferCategoriesService],
})
export class OfferCategoriesModule {}
