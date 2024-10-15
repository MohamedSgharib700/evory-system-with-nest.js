import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkflowDetailsService } from './workflow.details.service';
import { WorkflowDetailsController } from './workflow.details.controller';
import { WorkflowDetailsRepository } from './workflow.details.repository';
import { WorkflowDetail } from './entities/workflow.detail.entity';
import { Workflow } from '../workflows/entities/workflow.entity';
import { App } from '../apps/entities/app.entity';
import { WorkflowsModule } from '../workflows/workflows.module';
import { AppModule } from 'src/app.module';


@Module({
  imports: [SequelizeModule.forFeature([WorkflowDetail , Workflow]) , WorkflowsModule ,],
  controllers: [WorkflowDetailsController],
  providers: [WorkflowDetailsRepository, WorkflowDetailsService],
  exports: [WorkflowDetailsService],
})
export class WorkflowDetailsModule {}
