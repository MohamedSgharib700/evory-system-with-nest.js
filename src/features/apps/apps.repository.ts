import { Injectable } from '@nestjs/common';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { App } from './entities/app.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Workflow } from '../workflows/entities/workflow.entity';
import { WorkflowDetail } from '../workflow.details/entities/workflow.detail.entity';
import { WorkflowDetailsRepository } from '../workflow.details/workflow.details.repository';
import { WorkflowsService } from '../workflows/workflows.service';
import { WorkflowDetailsService } from '../workflow.details/workflow.details.service';
import { NotificationsService } from '../notifications/notifications.service';
import { Notification } from '../notifications/entities/notification.entity';

@Injectable()
export class AppsRepository {
  constructor(
    @InjectModel(App)
    private appModel: typeof App,
    private readonly workflowService: WorkflowsService,
    private readonly workflowDetailService: WorkflowDetailsService,
    // private readonly Notifications: NotificationsService,
    @InjectModel(WorkflowDetail)
    private workflowDetailModel: typeof WorkflowDetail,
    @InjectModel(Workflow)
    private workflowModel: typeof Workflow,
    @InjectModel(Notification)
    private notificationModel: typeof Notification,
  ) {}

  async create(data: CreateAppDto & {icon: string}): Promise<App> {
    const app = new App();
    app.name_ar = data.name_ar;
    app.name_en = data.name_en;
    app.icon = data.icon;
    app.counter = data.counter;
    app.url = data.url;
    await app.save();
    
    const workflow = await this.workflowService.create({
      route_app: "Apps",
      model_id: app.id,
      department_id : "78e73219-d23d-47a9-a9e2-4e1086b05197",
      post_title    : app.name_ar,
    });

    const workflowLog = await this.workflowDetailService.create({
      workflow_id: workflow.id ,
      sender_employee_id: "a614759f-31f0-4fcc-b396-a6fc65a04993",
      action : "Add",
      future_employee_id: "a614759f-31f0-4fcc-b396-a6fc65a04993",
      reason : "I want add row",
      status : "Pending",
    });

    const notification = await this.notificationModel.create({
      model_id: app.id,
      status: "unread",
      message : "A new app has been added. You can view it now.",
      action    : "Add New App",
    });

     return app;
  }

  async findAll() {
    const apps = await this.appModel.findAll({ order: [['createdAt', 'DESC']],include: [
      {
        model: Workflow,
        include: [
          {
            model: WorkflowDetail ,
            order: [['createdAt', 'DESC']],
            limit: 1,
          },
        ],
      },
    ],});
    return apps ;
  }

  async top() {
    const topApps = await this.appModel.findAll();
     return topApps ;
   }

  //  async Approved() {
  //   return this.appModel.findAll({
  //     include: [
  //       {
  //         model: this.workflowModel,
  //         where: {
  //           status: 'Approved',
  //         },

  //       },
  //     ],
  //   });
  // }

  async Approved() {
    return this.appModel.findAll({
      include: [
        {
          model: this.workflowModel,
          where: {
            status: 'Approved', // Condition for the workflow
          },
          include: [
            {
              model: WorkflowDetail,
              where: {
                status: 'Approved', // Condition for the related workflow detail
              },
              required: true, // Ensures only workflows with approved details are included
            },
          ],
        },
      ],
    });
  }

  async findOne(id: string) {
    return await this.appModel.findOne({
      where: { id: id },
      order: [['createdAt', 'DESC']],include: [
        {
          model: Workflow,
          include: [
            {
              model: WorkflowDetail ,
            },
          ],
        },
      ],
    });
  }

  //TODO:- I need make enhncment here
  async update(id: string, updatedData: Partial<App>): Promise<App> {
    await this.appModel.update(updatedData, {
      where: { id },
      returning: true, 
    });
    
    const app = await this.appModel.findByPk(id,{
      include: 
        {
          model: Workflow,
        },
    });

     const workflowLog = await this.workflowDetailService.create({
      workflow_id: app.workflow.id ,
      sender_employee_id: "a614759f-31f0-4fcc-b396-a6fc65a04993",
      action : "Update",
      future_employee_id: "a614759f-31f0-4fcc-b396-a6fc65a04993",
      reason : "I have updated the data.",
      status : "Pending",
      });

    return app;
  }

  // async updateApp(id: string, updatedApp: Partial<App>): Promise<App> {
  //   const app = await this.findOne(id);
    
  //   if (!app) {
  //     throw new Error(`App with id ${id} not found`);
  //   }

  //   try {
      
  //     await app.update(updatedApp , {
  //           where: { id },
  //           returning: true,
  //         });
  //         console.log(app);
          
  //     return app;
  //   } catch (error) {
  //     throw new Error(`Failed to update app with id ${id}: ${error.message}`);
  //   }
  // }

  async remove(id: string) {
    await this.appModel.destroy({
      where: { id: id },
    });
    
    const workflow = await this.workflowService.create({
      route_app: "Apps",
      model_id: id,
      department_id : "106151ce-5a1f-481c-9973-9732bc505cad",
     });

     const workflowLog = await this.workflowDetailService.create({
      workflow_id: workflow.id ,
      sender_employee_id: "a614759f-31f0-4fcc-b396-a6fc65a04993",
      action : "Delete",
      future_employee_id: "a614759f-31f0-4fcc-b396-a6fc65a04993",
      reason : "I want delete row",
      status : "Pending",
      });

  }
}
