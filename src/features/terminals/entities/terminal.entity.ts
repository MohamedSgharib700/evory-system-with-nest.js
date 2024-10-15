import {Column , Table } from 'sequelize-typescript';
import { BaseModel } from '../../../shared/DB/base.model';

@Table({ tableName : 'terminals'})
export class Terminal extends BaseModel {

    @Column({field: 'name_ar'})
    name_ar : string;

    @Column({field: 'name_en'})
    name_en : string;
}
