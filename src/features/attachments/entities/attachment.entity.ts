import { Table ,Column ,BelongsTo , Model, DataType, ForeignKey } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Library } from "src/features/libraries/entities/library.entity";
import { News } from "src/features/news/entities/news.entity";
import { Offer } from "src/features/offers/entities/offer.entity";
import { Event } from "src/features/events/entities/event.entity";
import { Inquiry } from "src/features/inquiries/entities/inquiry.entity";

@Table({tableName:"attachments"})
export class Attachment extends BaseModel {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
      })
      id: string;
    
    @Column({field: 'model_route'})
    model_route : string ;
    
    @ForeignKey(() => Library)
    @Column({field: 'model_id'})
    model_id : string ;

    @Column({field: 'url'})
    url : string ;

    @Column({field: 'size'})
    size : string ;

    @Column({field: 'type'})
    type : string ;

    @BelongsTo(() => Library)
    library: Library
    
    @BelongsTo(() => News, 'model_id')
     news: News;

     @BelongsTo(() => Event, 'model_id')
     event: Event;

     @BelongsTo(() => Offer, 'model_id')
     offer: Offer;

     @BelongsTo(() => Inquiry, 'model_id')
     inquiry: Inquiry;
     
    
}
