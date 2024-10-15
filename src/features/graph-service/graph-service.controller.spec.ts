import { Test, TestingModule } from '@nestjs/testing';
import { GraphServiceController } from './graph-service.controller';

describe('GraphServiceController', () => {
  let controller: GraphServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraphServiceController],
    }).compile();

    controller = module.get<GraphServiceController>(GraphServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
