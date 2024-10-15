import { Injectable } from '@nestjs/common';
import { WorkflowDetail } from './entities/workflow.detail.entity';
import { CreateWorkflowDetailDto } from './dto/create-workflow.detail.dto';
import { UpdateWorkflowDetailDto } from './dto/update-workflow.detail.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from '../departments/entities/department.entity';
import { Workflow } from '../workflows/entities/workflow.entity';
import { WorkflowsService } from '../workflows/workflows.service';
import { App } from '../apps/entities/app.entity';

@Injectable()
export class WorkflowDetailsRepository {
  constructor(
    @InjectModel(WorkflowDetail)
      private workflowDetailModel: typeof WorkflowDetail,
      private readonly workflowService: WorkflowsService,
  ) {}  
   
  
  async create(data:Partial<WorkflowDetail> ) : Promise<WorkflowDetail> {
    return await this.workflowDetailModel.create(data);
  }
  

  async findAll() {
    return await this.workflowDetailModel.findAll({order: [['createdAt', 'DESC']],
     include:[{ model: Workflow,include: [
      {
        model: App,
      },
    ], }] });
  }

  async findOne(id: string) {
    return await this.workflowDetailModel.findOne({
      where: { id: id }, include:{ model: Workflow }
    });
  }

  async update(id: string, update: Partial<WorkflowDetail>): Promise<[any, WorkflowDetail[]]> {
    return await this.workflowDetailModel.update(
      update,
      {
        where: { id },
        returning: true,
      }
    );

   
    // if want change status workflow after change status workflow
    // if (updatedWorkflowDetails && updatedWorkflowDetails.length > 0) {
    //   // Update the corresponding Workflow record with the same status as the updated WorkflowDetail
    //   const updatedWorkflow = await this.workflowService.update(
    //     updatedWorkflowDetails[0].workflow_id,
    //     {
    //       status: updatedWorkflowDetails[0].status,
    //     }
    //   );
  
    //   return [updatedWorkflow, updatedWorkflowDetails];
    // } else {
    //   return [null, []];
    // }
  }

  async remove(id: string) {
    await this.workflowDetailModel.destroy({
      where: { id: id },
    });
  }
}
