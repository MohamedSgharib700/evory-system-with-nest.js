import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferCategoryDto } from './create-offer.category.dto';

export class UpdateOfferCategoryDto extends PartialType(CreateOfferCategoryDto) {}
