import { UUID } from "crypto";

export class CreateOfferDto {
    title_ar : string ;
    title_en : string ;
    descriptions_ar : string ; 
    descriptions_en : string ; 
    type : string ;
    start_date : string;
    end_date : string;
    website_url : string ;
    terms_ar : string;
    terms_en : string;
    category_id : UUID;
    terminal_id : UUID;
    location : string;
    status : string ;
    discount_percentage : number;
    display_hp : number;
}
