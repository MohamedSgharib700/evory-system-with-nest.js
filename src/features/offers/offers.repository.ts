import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UUID } from 'crypto';
import { Attachment } from '../attachments/entities/attachment.entity';
import { OfferCategory } from '../offer.categories/entities/offer.category.entity';

@Injectable()
export class OffersRepository {
  constructor(
    @InjectModel(Offer)
    private offerModel: typeof Offer,
  ) {}

  async create(title_ar : string , title_en : string , descriptions_ar : string , descriptions_en : string ,
    type : string, start_date : string , end_date : string , logo : string , website_url : string , terms_ar : string , terms_en : string , category_id : UUID , terminal_id : UUID , location : string ,
     status : string , discount_percentage : number, display_hp : number ): Promise<Offer> {
    const offer = new Offer();
    offer.title_ar = title_ar;
    offer.title_en = title_en;
    offer.descriptions_ar = descriptions_ar;
    offer.descriptions_en = descriptions_en;
    offer.type = type;
    offer.start_date = start_date;
    offer.end_date = end_date;
    offer.logo = logo;
    offer.website_url = website_url;
    offer.terms_ar = terms_ar;
    offer.terms_en = terms_en;
    offer.category_id = category_id;
    offer.terminal_id = terminal_id;
    offer.location = location;
    offer.status = status;
    offer.discount_percentage = discount_percentage;
    offer.display_hp = display_hp;
    await offer.save();

    return offer ; 
  }

  async findAll() {
    
   const offers = await this.offerModel.findAll({ include:[ {model: Attachment} , {model: OfferCategory} ]});

    return offers ;
  }

  async findAllForHomePage() {
    return await Offer.findAll({ where: { display_hp: 1 } });
  }

  async findOne(id: string) {
    return await this.offerModel.findOne({
      where: { id: id }, include:{ model: Attachment }
    });
  }

  async update(id: string, updatedOffer: Partial<Offer>): Promise<[number, Offer[]]> {
    return this.offerModel.update(updatedOffer, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.offerModel.destroy({
      where: { id: id },
    });
  }
}
