import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';
import { OffersRepository } from './offers.repository';

@Injectable()
export class OffersService {

  constructor(private readonly offersRepositoy : OffersRepository ){}

  async create(logo: Express.Multer.File,createOfferDto : CreateOfferDto ): Promise<Offer> {

    const { title_ar, title_en , descriptions_ar , descriptions_en ,
      type , start_date , end_date , terms_ar , terms_en , website_url , category_id , terminal_id , location ,
       status , discount_percentage , display_hp } = createOfferDto;
      const offer = await this.offersRepositoy.create(title_ar, title_en , descriptions_ar ,
         descriptions_en , type , start_date , end_date , logo.originalname , terms_ar , terms_en , website_url ,  category_id ,
         terminal_id , location ,status , discount_percentage , display_hp);
      
    return offer;
  }

  async findAll() {
    return await this.offersRepositoy.findAll();
  }

  async findAllForHomePage() {
    return await this.offersRepositoy.findAllForHomePage();
  }

  async findOne(id: string) {
    return await this.offersRepositoy.findOne(id);
  }

  async update(id: string, updatedOffer: Partial<Offer>): Promise<Offer> {
    const [, [updatedRecord]] = await this.offersRepositoy.update(id, updatedOffer);
    return updatedRecord;
  }


  async remove(id: string) {
     await this.offersRepositoy.remove(id);
     return {massage : 'The row has been removed successfully'}
  }
}
