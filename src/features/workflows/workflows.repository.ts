import { Injectable } from '@nestjs/common';
import { Workflow } from './entities/workflow.entity';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from '../departments/entities/department.entity';
import { WorkflowDetail } from '../workflow.details/entities/workflow.detail.entity';
import { App } from '../apps/entities/app.entity';

@Injectable()
export class WorkflosRepository {
  constructor(
    @InjectModel(Workflow)
    private workflowModel: typeof Workflow,
  ) {}
   
  
  async create(data:Partial<Workflow> ) : Promise<Workflow> {
    return await this.workflowModel.create(data);
  }
  

  async findAll() {
    return await this.workflowModel.findAll({ order: [['createdAt', 'DESC']],
      include:[{ model: Department  } , {
        model:  WorkflowDetail,
        
      },{
        model: WorkflowDetail,
        order: [['createdAt', 'DESC']],
        limit: 1,
      }] });
  }   

  async findAllWithLastWorkflowDetails() {
    return await this.workflowModel.findAll({ order: [['createdAt', 'DESC']],
      include:[{ model: Department  } , {
        model: WorkflowDetail,
        order: [['createdAt', 'DESC']],
        limit: 1,
      },{model: App}, ] });
  }   

  async findOne(id: string) {
    return await this.workflowModel.findOne({
      where: { id: id },order: [['createdAt', 'DESC']],
      include:[{ model: Department  } , {
        model: WorkflowDetail,
        order: [['createdAt', 'DESC']],
        limit: 1,
      },{model: App} ]
    });
  }

  async update(id: string, updatedapp: Partial<Workflow>): Promise<[any, Workflow[]]> {
    return this.workflowModel.update(updatedapp, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: string) {
    await this.workflowModel.destroy({
      where: { id: id },
    });
  }
}
