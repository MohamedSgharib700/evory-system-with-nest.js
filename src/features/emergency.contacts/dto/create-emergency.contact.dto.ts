import { UUID } from "crypto";

export class CreateEmergencyContactDto {

    name_ar : string ;
    name_en : string ;
    kinship : string;
    phone : string; 
    employee_id : UUID
}
