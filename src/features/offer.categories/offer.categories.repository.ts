import { Injectable } from '@nestjs/common';
import { OfferCategory } from './entities/offer.category.entity';
import { CreateOfferCategoryDto } from './dto/create-offer.category.dto';
import { UpdateOfferCategoryDto } from './dto/update-offer.category.dto';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class OfferCategoriesRepository {
  constructor(
    @InjectModel(OfferCategory)
    private offerCategoryModel: typeof OfferCategory,
  ) {}
   
  
  async create(data:Partial<OfferCategory> ) : Promise<OfferCategory> {
    return await this.offerCategoryModel.create(data);
  }
  

  async findAll() {
    return await this.offerCategoryModel.findAll();
  }

  async findOne(id: string) {
    return await this.offerCategoryModel.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updated: Partial<OfferCategory>): Promise<[any, OfferCategory[]]> {
    return this.offerCategoryModel.update(updated, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.offerCategoryModel.destroy({
      where: { id: id },
    });
  }
}
