import { Table ,Column ,DataType,BelongsTo , ForeignKey } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Employee } from "src/features/employees/entities/employee.entity";
import { UUID } from "crypto";

@Table({tableName : "settings"})
export class Setting extends BaseModel {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
      })
    id: string;

    @Column({field: 'lang'})
    lang : string;

    @Column({field: 'theme'})
    theme : string;
    
    @ForeignKey(() => Employee)
    @Column({field: 'employee_id'})
    employee_id : UUID ;

    @BelongsTo(() => Employee)
    employee: Employee

}
