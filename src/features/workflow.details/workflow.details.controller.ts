import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkflowDetailsService } from './workflow.details.service';
import { CreateWorkflowDetailDto } from './dto/create-workflow.detail.dto';
import { UpdateWorkflowDetailDto } from './dto/update-workflow.detail.dto';

@Controller('workflow.details')
export class WorkflowDetailsController {
  constructor(private readonly workflowDetailsService: WorkflowDetailsService) {}

  @Post()
  create(@Body() createWorkflowDetailDto: CreateWorkflowDetailDto) {
    return this.workflowDetailsService.create(createWorkflowDetailDto);
  }

  @Get()
  findAll() {
    return this.workflowDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkflowDetailDto: UpdateWorkflowDetailDto) {
    return this.workflowDetailsService.update(id, updateWorkflowDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowDetailsService.remove(id);
  }
}
