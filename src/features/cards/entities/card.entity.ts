import { Model } from "sequelize";
import { Table , Column } from "sequelize-typescript";
import { BaseModel } from "src/shared/db/base.model";


@Table({tableName: "cards"})
export class Card extends BaseModel {

    @Column({field: 'names'})
    names : string;

    @Column({field: 'position'})
    position : string;
 
    @Column({field: 'sizes'})
    sizes : string;
   
    @Column({field: 'img'})
    img : string
 
    @Column({field: 'upload_date'})
    upload_date : string; 
}
