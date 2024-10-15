import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfferCategoriesService } from './offer.categories.service';
import { CreateOfferCategoryDto } from './dto/create-offer.category.dto';
import { UpdateOfferCategoryDto } from './dto/update-offer.category.dto';

@Controller('offer.categories')
export class OfferCategoriesController {
  constructor(private readonly offerCategoriesService: OfferCategoriesService) {}

  @Post()
  create(@Body() createOfferCategoryDto: CreateOfferCategoryDto) {
    return this.offerCategoriesService.create(createOfferCategoryDto);
  }

  @Get()
  findAll() {
    return this.offerCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferCategoryDto: UpdateOfferCategoryDto) {
    return this.offerCategoriesService.update(id, updateOfferCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerCategoriesService.remove(id);
  }
}
