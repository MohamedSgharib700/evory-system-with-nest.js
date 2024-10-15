import { Table ,Column  } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';

@Table({tableName : 'permissions'})
export class Permission extends BaseModel {

    @Column({field: 'name'})
    name : string;

}
