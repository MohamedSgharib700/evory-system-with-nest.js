import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Render , UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';


@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  
  @Post()
  @UseInterceptors(FileInterceptor('logo'))
  async create(
    @UploadedFile() logo: Express.Multer.File,
    @Body() CreateOfferDto: CreateOfferDto,
  ): Promise<Offer> {
    return this.offersService.create(logo, CreateOfferDto);
  }

  @Get()
  findAll() {
    const offers = this.offersService.findAll();
    return offers;
  }

  @Get('for-home-offers')
  findAllForHome() {
    return this.offersService.findAllForHomePage();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedOffer: Partial<Offer>): Promise<Offer> {
    return this.offersService.update(id, updatedOffer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offersService.remove(id);
  }
}
