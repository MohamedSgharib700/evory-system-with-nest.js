import { UUID } from "crypto";
export class CreateEmployeeDto {

    name_ar : string ;
    name_en : string ;
    email : string ;
    password : string;
    phone : string;
    address : string ; 
    department_id : UUID;
    date_of_birth : string;
    start_date : string;
    status : number;
}
