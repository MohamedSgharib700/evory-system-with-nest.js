import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppsService } from './apps.service';
import { AppsController } from './apps.controller';
import { AppsRepository } from './apps.repository';
import { App } from './entities/app.entity';
import { Workflow } from '../workflows/entities/workflow.entity';
import { WorkflowsModule } from '../workflows/workflows.module';
import { WorkflowDetail } from '../workflow.details/entities/workflow.detail.entity';
import { WorkflowDetailsModule } from '../workflow.details/workflow.details.module';
import { Notification } from '../notifications/entities/notification.entity';
import { NotificationsModule } from '../notifications/notifications.module';


@Module({
  imports: [SequelizeModule.forFeature([App , Workflow , WorkflowDetail , Notification]),
  WorkflowsModule, WorkflowDetailsModule , NotificationsModule],
  controllers: [AppsController],
  providers: [AppsRepository ,AppsService],
  exports: [AppsRepository]
})
export class AppsModule {}
