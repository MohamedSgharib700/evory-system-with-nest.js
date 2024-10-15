import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowDetailsService } from './workflow.details.service';

describe('WorkflowDetailsService', () => {
  let service: WorkflowDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkflowDetailsService],
    }).compile();

    service = module.get<WorkflowDetailsService>(WorkflowDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
