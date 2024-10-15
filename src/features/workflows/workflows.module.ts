import { Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkflowsService } from './workflows.service';
import { WorkflowsController } from './workflows.controller';
import { WorkflosRepository } from './workflows.repository';
import { Workflow } from './entities/workflow.entity';
import { App } from '../apps/entities/app.entity';
import { WorkflowDetail } from '../workflow.details/entities/workflow.detail.entity';
import { AppModule } from 'src/app.module';
import { WorkflowDetailsModule } from '../workflow.details/workflow.details.module';


@Module({
  imports: [SequelizeModule.forFeature([Workflow])],
  controllers: [WorkflowsController],
  providers: [WorkflosRepository , WorkflowsService],
  exports: [WorkflosRepository , WorkflowsService ],
})
export class WorkflowsModule {}
