import { Table ,Column , ForeignKey , BelongsTo } from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { UUID } from "crypto";
import { Workflow } from "src/features/workflows/entities/workflow.entity";
import { Employee } from "src/features/employees/entities/employee.entity";

@Table({tableName: "workflows_details"})
export class WorkflowDetail extends BaseModel {

    @ForeignKey(() => Workflow)
    @Column({field: 'workflow_id'})
    workflow_id : string;

    @ForeignKey(() => Employee)
    @Column({field: 'sender_employee_id'})
    sender_employee_id : UUID;

    @Column({field: 'action'})
    action : string; 

    @ForeignKey(() => Employee)
    @Column({field: 'future_employee_id'})
    future_employee_id : UUID;

    @Column({field: 'reason'})
    reason : string; 

    @Column({field: 'admin_response'})
    admin_response : string; 

    @Column({field: 'status'})
    status : string; 

    @BelongsTo(() => Workflow)
    workflow: Workflow;
}
