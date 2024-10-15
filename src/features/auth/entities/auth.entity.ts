import { table } from "console";
import { Table , Column ,  } from "sequelize-typescript";
import { BaseModel } from "src/shared/DB/base.model";
import { Employee } from "src/features/employees/entities/employee.entity";
import { combineTableNames } from "sequelize/types/utils";

@Table({tableName: "employess"})
export class Auth extends BaseModel {

}
