import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { OffersRepository } from './offers.repository';
import { Offer } from './entities/offer.entity';

@Module({
  imports: [SequelizeModule.forFeature([Offer])],
  controllers: [OffersController],
  providers: [OffersService,OffersRepository],
})
export class OffersModule {}
