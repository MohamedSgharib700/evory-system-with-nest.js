import { Table, Column, Model, DataType, HasMany , BelongsTo , ForeignKey} from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Attachment } from "src/features/attachments/entities/attachment.entity";
import { Department } from "src/features/departments/entities/department.entity";

@Table({tableName: "libraries"})
export class Library extends BaseModel {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
      })
      id: string;

    @Column({field: 'title_ar'})
    title_ar : string;

    @Column({field: 'title_en'})
    title_en : string;

    @Column({field: 'type'})
    type : string;

    @Column({field: 'size'})
    size : string;
    
    @ForeignKey(() => Department)
    @Column({field: 'department_id'})
    department_id : string;

    @HasMany(() => Attachment)
    attachment: Attachment[];

    @BelongsTo(() => Department)
    department: Department

}
