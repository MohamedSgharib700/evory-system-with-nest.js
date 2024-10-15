import { UUID } from "crypto";
export class CreateWorkflowDto {
    route_app     : string;
    model_id      : UUID;
    department_id : UUID;
    status        : string;
    notes         : string;
    post_title    : string;
    cms_status    : string
}
