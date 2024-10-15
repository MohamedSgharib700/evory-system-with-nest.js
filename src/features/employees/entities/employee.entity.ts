import { BaseModel } from "src/shared/DB/base.model";
import { Table , Column , ForeignKey , HasMany , HasOne , BelongsTo, DataType } from "sequelize-typescript";
import { Department } from "src/features/departments/entities/department.entity";
import { Setting } from "src/features/setting/entities/setting.entity";
import { EmergencyContact } from "src/features/emergency.contacts/entities/emergency.contact.entity";


@Table({tableName : "employees"})
export class Employee extends BaseModel {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
      })
      id: string;

    @Column({field : "name_ar"})
     name_ar : string ; 

     @Column({field : "name_en"})
     name_en : string ; 
    
    @Column ({field : "email"})
    email : string

    @Column ({field : "password" })
    password : string ; 

    @Column({field : "phone"})
    phone : string ; 

    @Column(DataType.STRING)
    address 

    @Column ({field : "date_of_birth"})
    date_of_birth : string ; 

    @Column ({field : "start_date"})
    start_date : string ; 

    @Column ({field : "status"})
    status : number ; 

    @ForeignKey(() => Department)
    @Column({field: 'department_id'})
    department_id : string ;

    @BelongsTo(() => Department)
    department: Department

    @HasOne(() => Setting)
    setting: Setting

    @HasMany(() => EmergencyContact)
    emergencyContact: EmergencyContact




    

}
