import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsRepository } from './news.repository';
import { News } from './entities/news.entity';

@Module({
  imports: [SequelizeModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsService , NewsRepository],
})
export class NewsModule {}
