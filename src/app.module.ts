import { Module , NestModule , MiddlewareConsumer } from '@nestjs/common';
import { ApiVersion } from './shared/benefits/apiVersion';
import { LangMiddleware } from './shared/Middlewares/lang.middleware';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { MulterModule } from '@nestjs/platform-express';
import { Role } from './features/roles/entities/role.entity';
import { Permission } from './features/permissions/entities/permission.entity';
import { RolesModule } from './features/roles/roles.module';
import { PermissionsModule } from './features/permissions/permissions.module';
import { EmployeesModule } from './features/employees/employees.module';
import { OffersModule } from './features/offers/offers.module';
import { EventsModule } from './features/events/events.module';
import { Offer } from './features/offers/entities/offer.entity';
import { Event } from './features/events/entities/event.entity';
import { AppsModule } from './features/apps/apps.module';
import {App} from './features/apps/entities/app.entity';
import { NewsModule } from './features/news/news.module';
import {News} from './features/news/entities/news.entity';
import { LibrariesModule } from './features/libraries/libraries.module';
import { Library } from './features/libraries/entities/library.entity';
import { InquiriesModule } from './features/inquiries/inquiries.module';
import { Inquiry } from './features/inquiries/entities/inquiry.entity';
import { AttachmentsModule } from './features/attachments/attachments.module';
import { Attachment } from './features/attachments/entities/attachment.entity';
import { SettingModule } from './features/setting/setting.module';
import { Setting } from './features/setting/entities/setting.entity';
import { AboutusModule } from './features/aboutus/aboutus.module';
import { Aboutus } from './features/aboutus/entities/aboutus.entity';
import { GraphServiceController } from './features/graph-service/graph-service.controller';
import { DepartmentsModule } from './features/departments/departments.module';
import { PagesModule } from './features/pages/pages.module';
import { Department } from './features/departments/entities/department.entity';
import { Page } from './features/pages/entities/page.entity';
import { EmergencyContactsModule } from './features/emergency.contacts/emergency.contacts.module';
import { EmergencyContact } from './features/emergency.contacts/entities/emergency.contact.entity';
import { BlobModule } from './shared/azure-services/blob/blob.module';
import { Employee } from './features/employees/entities/employee.entity';
import { TerminalsModule } from './features/terminals/terminals.module';
import { Terminal } from './features/terminals/entities/terminal.entity';
import { WorkflowsModule } from './features/workflows/workflows.module';
import { Workflow } from './features/workflows/entities/workflow.entity';
import { OfferCategoriesModule } from './features/offer.categories/offer.categories.module';
import { OfferCategory } from './features/offer.categories/entities/offer.category.entity';
import { WorkflowDetailsModule } from './features/workflow.details/workflow.details.module';
import { WorkflowDetail } from './features/workflow.details/entities/workflow.detail.entity';
import { AppController } from './app.controller';
import { AuthModule } from './features/auth/auth.module';
import { CardsModule } from './features/cards/cards.module';
import { Card } from './features/cards/entities/card.entity';
import { NotificationsModule } from './features/notifications/notifications.module';
import { Notification } from './features/notifications/entities/notification.entity';
import { Auth } from './features/auth/entities/auth.entity';
import { CaslModule } from './features/casl/casl.module';





 dotenv.config();
@Module({
  imports: [RolesModule, PermissionsModule,OffersModule,EventsModule,AppsModule,NewsModule, AppModule ,
    LibrariesModule,InquiriesModule,AttachmentsModule,AboutusModule,DepartmentsModule, TerminalsModule ,
     WorkflowsModule ,WorkflowDetailsModule , CardsModule , NotificationsModule, AuthModule ,MulterModule.register({

      dest: './uploads/attachments', // Specify the directory where uploaded files will be stored
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.host,
      port: 5432,
      username: process.env.username_db,
      password: process.env.password_db, 
      database: process.env.database_name,
     
    //   "dialectOptions": {
    //     "ssl": {
    //         "require": true,
    //         "rejectUnauthorized": true
    //     }
    // },
      models: [Role , Permission , Offer , Event ,App , News , Library ,Attachment , Aboutus ,
        Department ,Page , Inquiry , EmergencyContact , Employee , Terminal , Setting , Workflow ,
         WorkflowDetail, OfferCategory , Card , Notification , Auth],
    }), 
  
  LibrariesModule, InquiriesModule,AppsModule, AttachmentsModule, SettingModule, AboutusModule,
   DepartmentsModule, PagesModule, EmergencyContactsModule, BlobModule, EmployeesModule,
    WorkflowsModule, OfferCategoriesModule, WorkflowDetailsModule, AuthModule, CardsModule, NotificationsModule, CaslModule
  
],
  controllers: [AppController , GraphServiceController],
  providers: [AppService , ApiVersion],
  exports: [ApiVersion],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LangMiddleware)
      .forRoutes('*');
  }
}
