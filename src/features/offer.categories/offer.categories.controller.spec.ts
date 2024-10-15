import { Test, TestingModule } from '@nestjs/testing';
import { OfferCategoriesController } from './offer.categories.controller';
import { OfferCategoriesService } from './offer.categories.service';

describe('OfferCategoriesController', () => {
  let controller: OfferCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferCategoriesController],
      providers: [OfferCategoriesService],
    }).compile();

    controller = module.get<OfferCategoriesController>(OfferCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
