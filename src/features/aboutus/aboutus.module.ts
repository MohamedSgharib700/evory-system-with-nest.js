import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AboutusService } from './aboutus.service';
import { AboutusController } from './aboutus.controller';
import { AboutusRepository } from './aboutus.repository';
import { Aboutus } from './entities/aboutus.entity';

@Module({
  imports: [SequelizeModule.forFeature([Aboutus])],
  controllers: [AboutusController],
  providers: [AboutusService , AboutusRepository],
})
export class AboutusModule {}
