import { Table ,Column , HasMany} from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Attachment } from "src/features/attachments/entities/attachment.entity";
@Table({tableName: "inquires"})

export class Inquiry extends BaseModel {
  
    @Column({field: 'type'})
    type : string;

    @Column({field: 'content_ar'})
    content_ar : string;

    @Column({field: 'content_en'})
    content_en : string;

    @HasMany(() => Attachment, 'model_id')
    attachments: Attachment[];
    
}
