import { Injectable } from '@nestjs/common';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { WorkflosRepository } from './workflows.repository';
import { Workflow } from './entities/workflow.entity';

@Injectable()
export class WorkflowsService {

  constructor(private readonly workflowsRepository: WorkflosRepository) {}

  async create(data: Partial<Workflow>): Promise<Workflow> {
    return await this.workflowsRepository.create(data);
  }

  async findAll() {
    return await this.workflowsRepository.findAll();
  }

  async findAllWithLastDetails() {
    return await this.workflowsRepository.findAllWithLastWorkflowDetails();
  }

  async findOne(id: string) {
    return await this.workflowsRepository.findOne(id);
  }

  async update(id: string, updatedapp: UpdateWorkflowDto): Promise<Workflow> {
    const [, [updatedRecord]] = await this.workflowsRepository.update(id, updatedapp);
    return updatedRecord;
  }

  async remove(id: string) {
    await this.workflowsRepository.remove(id) ;
    return {massage : 'The row has been removed successfully'}
   }
}
