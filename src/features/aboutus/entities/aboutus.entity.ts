import { Table ,Column  } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';

@Table({tableName: "aboutus"})
export class Aboutus extends BaseModel {

    @Column({field: 'type'})
    type : string;

    @Column({field: 'content_ar'})
    content_ar : string;

    @Column({field: 'content_en'})
    content_en : string;

    @Column({field: 'image1'})
    image1 : string

    @Column({field: 'image2'})
    image2 : string

    @Column({field: 'image3'})
    image3 : string;

    
}
