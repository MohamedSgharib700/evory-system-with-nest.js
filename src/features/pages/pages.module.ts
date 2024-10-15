import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { PagesRepository } from './pages.repository';
import { Page } from './entities/page.entity';

@Module({
  imports: [SequelizeModule.forFeature([Page])],
  controllers: [PagesController],
  providers: [PagesService , PagesRepository],
})
export class PagesModule {}
