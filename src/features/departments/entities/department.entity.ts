import {Column , Table , HasMany , DataType} from 'sequelize-typescript';
import { BaseModel } from '../../../shared/DB/base.model';
import { Library } from 'src/features/libraries/entities/library.entity';
import { Employee } from 'src/features/employees/entities/employee.entity';
import { Workflow } from 'src/features/workflows/entities/workflow.entity';

@Table({ tableName : 'departments'})
export class Department extends BaseModel {

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

    @HasMany(() => Library)
    library: Library[];

    @HasMany(() => Employee)
    employees: Employee[];

    @HasMany(() => Workflow)
    worwflows: Workflow[];
}
