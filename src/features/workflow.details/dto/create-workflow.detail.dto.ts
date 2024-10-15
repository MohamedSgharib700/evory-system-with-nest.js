import { UUID } from "crypto";

export class CreateWorkflowDetailDto {
    workflow_id : string;
    sender_employee_id : UUID;
    action             : string;
    future_employee_id : UUID;
    reason             : string;
    status             : string;
    
}
