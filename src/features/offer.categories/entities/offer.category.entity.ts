import { Table ,Column , HasMany } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Offer } from "src/features/offers/entities/offer.entity";
@Table({tableName: "offers_categories"})
export class OfferCategory extends BaseModel {

    @Column({field: 'name_ar'})
    name_ar : string;

    @Column({field: 'name_en'})
    name_en : string;
    
    @Column({field: 'status'})
    status : string;

    @HasMany(() => Offer, 'category_id')
    offers: Offer[];    
}
