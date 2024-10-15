import {Column , Table } from 'sequelize-typescript';
import { BaseModel } from '../../../shared/DB/base.model';

@Table({ tableName : 'roles'})
export class Role extends BaseModel {

    @Column({field: 'title_ar'})
    title_ar : string;

    @Column({field: 'title_en'})
    title_en : string;
}

