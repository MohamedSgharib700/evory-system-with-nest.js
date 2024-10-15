import { Table ,Column , HasMany , HasOne , BelongsTo , DataType , ForeignKey } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { UUID } from "crypto";
import { Attachment } from "src/features/attachments/entities/attachment.entity";
import { OfferCategory } from "src/features/offer.categories/entities/offer.category.entity";

@Table({tableName: "offers"})
export class Offer extends BaseModel {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
      })
    id: string;

    @Column({field: 'title_ar'})
    title_ar : string;

    @Column({field: 'title_en'})
    title_en : string;

    @Column({field: 'descriptions_ar'}) 
    descriptions_ar : string;

    @Column({field: 'descriptions_en'})
    descriptions_en : string;

    @Column({field: 'type'})
    type : string;

    @Column({field: 'start_date'})
    start_date : string;

    @Column({field: 'end_date'})
    end_date : string;
    
    @Column({field: 'logo'})
    logo : string;

    @Column({field: 'website_url'})
    website_url : string;


    @Column({field: 'terms_ar'})
    terms_ar : string;

    @Column({field: 'terms_en'})
    terms_en : string;

    @ForeignKey(() => OfferCategory)
    @Column({field: 'category_id'})
    category_id : UUID;

    @Column({field: 'terminal_id'})
    terminal_id : UUID;

    @Column({field: 'location'})
    location : string;

    @Column({field: 'status'})
    status : string;

    @Column({field: 'discount_percentage'})
    discount_percentage : number;

    @Column({field: 'display_hp'})
    display_hp : number;

    @HasMany(() => Attachment, 'model_id')
    attachments: Attachment[];

    @BelongsTo(() => OfferCategory)
    offerCategory: OfferCategory
}


