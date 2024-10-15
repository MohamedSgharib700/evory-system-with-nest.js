import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Attachment } from "src/features/attachments/entities/attachment.entity";

@Table({tableName: "events"})
export class Event extends BaseModel {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    id: string;

    @Column({field: 'name_ar'})
    name_ar : string;

    @Column({field: 'name_en'})
    name_en : string;

    @Column({field: 'type'})
    type : string;

    @Column({field: 'descriptions_ar'})
    descriptions_ar : string;

    @Column({field: 'descriptions_en'})
    descriptions_en : string;

    @Column({field: 'start_date'})
    start_date : string;

    @Column({field: 'end_date'})
    end_date : string;

    @Column({field: 'start_time'})
    start_time : string;

    @Column({field: 'end_time'})
    end_time : string;

    @Column({field: 'location'})
    location : string;

    @Column({field: 'location_url'})
    location_url : string;

    @Column({field: 'display_hp'})
    display_hp : number;

    @Column({field: 'social_responsibility'})
    social_responsibility : number;

    @HasMany(() => Attachment, 'model_id')
    attachments: Attachment[];
}

