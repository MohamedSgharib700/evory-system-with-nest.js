import {Column , Table } from 'sequelize-typescript';
import { BaseModel } from '../../../shared/DB/base.model';

@Table({ tableName : 'pages'})
export class Page extends BaseModel {

    @Column({field: 'name_ar'})
    name_ar : string;

    @Column({field: 'name_en'})
    name_en : string;

}
