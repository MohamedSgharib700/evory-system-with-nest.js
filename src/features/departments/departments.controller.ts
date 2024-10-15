import { Controller, Get, Post, Body, Patch, Param, Delete , Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
   async create(@Body() createDepartmentDto: CreateDepartmentDto) {
   
    return await this.departmentsService.create(createDepartmentDto);
   }

  //TODO:- I want make enhancement here after finish my tasks
  @Get()
  // findAll(@Req() req: Request, @Res() res: Response) {
  findAll() {
    return this.departmentsService.findAll();
    // const language = req.headers['accept-language'] as string;
    // if (language === 'ar') {
    //   res.send('مرحبا بك!');
    // } else {
    //   res.send(' Hello');
    // }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(id);
  }
}
