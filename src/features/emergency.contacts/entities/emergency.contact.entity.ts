import { Table ,Column ,DataType,BelongsTo , ForeignKey  } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Employee } from "src/features/employees/entities/employee.entity";
import { UUID } from "crypto";

@Table({tableName: "emergency_contacts"})

export class EmergencyContact extends BaseModel {

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
    
    @Column({field: 'kinship'})
    kinship : string


    @Column({field: 'phone'})
    phone : string;

    @ForeignKey(() => Employee)
    @Column({field: 'employee_id'})
    employee_id : UUID ;

    @BelongsTo(() => Employee)
    employee: Employee

}
