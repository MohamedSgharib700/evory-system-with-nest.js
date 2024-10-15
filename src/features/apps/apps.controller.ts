import { Controller, Get, Post, Body, Patch, Param, Delete , UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppsService } from './apps.service';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { App } from './entities/app.entity';
// import { ApiVersion } from '../../shared/benefits/apiVersion'

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('icon'))
  async create(
    @UploadedFile() icon: Express.Multer.File,
    @Body() CreateAppDto: CreateAppDto,
   
  ): Promise<App> {
    // console.log(CreateAppDto);
    return this.appsService.create(icon, CreateAppDto);
  }
  
  @Get()
  findAll() {
    return this.appsService.findAll();
  }

  @Get('tops')
  top() {
    return this.appsService.findAll();
  }

  @Get('approved')
  approved() {
    return this.appsService.approved();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedApp: UpdateAppDto): Promise<App> {
    return this.appsService.update(id, updatedApp) ;
  }
 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appsService.remove(id);
  }
}
