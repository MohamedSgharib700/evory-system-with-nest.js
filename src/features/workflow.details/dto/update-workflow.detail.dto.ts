import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkflowDetailDto } from './create-workflow.detail.dto';

export class UpdateWorkflowDetailDto extends PartialType(CreateWorkflowDetailDto) {}
