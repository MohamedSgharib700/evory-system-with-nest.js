import { Table ,Column ,DataType, HasMany} from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Attachment } from "src/features/attachments/entities/attachment.entity";

@Table({tableName: "news"})
export class News extends BaseModel {

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

    @Column({field: 'date'})
    date : string;

    @Column({field: 'display_hp'})
    display_hp : number;

    @HasMany(() => Attachment, 'model_id')
    attachments: Attachment[];

}
