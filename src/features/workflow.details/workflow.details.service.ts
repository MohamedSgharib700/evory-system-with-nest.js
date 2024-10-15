import { Injectable } from '@nestjs/common';
import { CreateWorkflowDetailDto } from './dto/create-workflow.detail.dto';
import { UpdateWorkflowDetailDto } from './dto/update-workflow.detail.dto';
import { WorkflowDetailsRepository } from './workflow.details.repository';
import { WorkflowDetail } from './entities/workflow.detail.entity';

@Injectable()
export class WorkflowDetailsService {

  constructor(private readonly workflowDetailsRepository: WorkflowDetailsRepository) {}

  async create(data: Partial<WorkflowDetail>): Promise<WorkflowDetail> {
    return await this.workflowDetailsRepository.create(data);
  }

  async findAll() {
    return await this.workflowDetailsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.workflowDetailsRepository.findOne(id);
  }

  async update(id: string, update: UpdateWorkflowDetailDto): Promise<WorkflowDetail> {
    const [, [updatedRecord]] = await this.workflowDetailsRepository.update(id, update);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.workflowDetailsRepository.remove(id) ;
    return {massage : 'The row has been removed successfully'}
   }

}
