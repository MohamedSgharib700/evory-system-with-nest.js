import { Injectable } from '@nestjs/common';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { AppsRepository } from './apps.repository';
import { App } from './entities/app.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppsService {

  constructor(
    @InjectModel(App)
    private appModel: typeof App,
    private readonly appsRepositoy : AppsRepository ){}

  async create(icon: Express.Multer.File, createAppDto: CreateAppDto): Promise<App> {
      return this.appsRepositoy.create({...createAppDto, icon: icon.originalname});
  }

  async findAll() {
    return await this.appsRepositoy.findAll();
  }

  async top() {
    return await this.appsRepositoy.findAll();
  }

  async approved() {
    return await this.appsRepositoy.Approved();
  }

  async findOne(id: string) {
    return await this.appsRepositoy.findOne(id);
  }

  async update(id: string, updatedapp: UpdateAppDto): Promise<App> {
    return this.appsRepositoy.update(id, { ...updatedapp });
  }

  // async update(id: string, updatedApp: UpdateAppDto): Promise<App> {
  //   return this.appsRepositoy.update(id, updatedApp);
  // }

  // async update(id: string, updatedapp: UpdateAppDto): Promise<App> {
  //   console.log("I am here");
  //   const [, [updatedRecord]] = await this.appsRepositoy.update(id, updatedapp);
  //   return updatedRecord;
  // }

  // async update(id: string, updatedApp: UpdateAppDto): Promise<App> {
  //   const app = await this.appModel.findByPk(id);
  //   if (!app) {
  //     throw new Error(`App with id ${id} not found`);
  //   }

  //   try {
  //     await this.appModel.update(updatedApp, {
  //       where: { id },
  //     });
  //     const updatedRecord = await this.appModel.findByPk(id);
  //     if (!updatedRecord) {
  //       throw new Error(`Failed to retrieve updated record for app with id ${id}`);
  //     }
  //     return updatedRecord;
  //   } catch (error) {
  //     throw new Error(`Failed to update app with id ${id}: ${error.message}`);
  //   }
  // }

  async remove(id: string) {
   await this.appsRepositoy.remove(id) ;
   return {massage : 'The row has been removed successfully'}
  }
}
