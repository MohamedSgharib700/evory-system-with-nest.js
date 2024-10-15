import { Injectable } from '@nestjs/common';
import { CreateOfferCategoryDto } from './dto/create-offer.category.dto';
import { UpdateOfferCategoryDto } from './dto/update-offer.category.dto';
import { OfferCategoriesRepository } from './offer.categories.repository';
import { OfferCategory } from './entities/offer.category.entity';

@Injectable()
export class OfferCategoriesService {
  constructor(private readonly offerCategoriesRepository: OfferCategoriesRepository) {}

  async create(data: Partial<OfferCategory>): Promise<OfferCategory> {
    return await this.offerCategoriesRepository.create(data);
  }

  async findAll() {
    return await this.offerCategoriesRepository.findAll();
  }

  async findOne(id: string) {
    return await this.offerCategoriesRepository.findOne(id);
  }

  async update(id: string, updated: UpdateOfferCategoryDto): Promise<OfferCategory> {
    const [, [updatedRecord]] = await this.offerCategoriesRepository.update(id, updated);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.offerCategoriesRepository.remove(id) ;
    return {massage : 'The row has been removed successfully'}
   }
}
