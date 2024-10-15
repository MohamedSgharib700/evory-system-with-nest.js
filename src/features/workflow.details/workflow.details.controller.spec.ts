import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowDetailsController } from './workflow.details.controller';
import { WorkflowDetailsService } from './workflow.details.service';

describe('WorkflowDetailsController', () => {
  let controller: WorkflowDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkflowDetailsController],
      providers: [WorkflowDetailsService],
    }).compile();

    controller = module.get<WorkflowDetailsController>(WorkflowDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
