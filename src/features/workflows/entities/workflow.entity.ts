import { Table ,Column , ForeignKey , BelongsTo , HasOne, DataType, HasMany} from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { UUID } from "crypto";
import { App } from "src/features/apps/entities/app.entity";
import { Department } from "src/features/departments/entities/department.entity";
import { WorkflowDetail } from "src/features/workflow.details/entities/workflow.detail.entity";

@Table({tableName:"workflows"})
export class Workflow extends BaseModel {

    @Column({field: 'route_app'})
    route_app : string;

    @ForeignKey(() => App)
    @Column({type: DataType.UUIDV4,field: 'model_id'})
    model_id : string;
    
    @ForeignKey(() => Department)
    @Column({field: 'department_id'})
    department_id : UUID;

    @Column({field: 'status'})
    status : string;

    @Column({field: 'notes'})
    notes : string; 

    @Column({field: 'post_title'})
    post_title : string; 

    @BelongsTo(() => App)
    app: App;

    @BelongsTo(() => Department)
    department: Department

    @HasMany(() => WorkflowDetail)
    workflowDetail: WorkflowDetail;
}
