import { Table ,Column , HasOne , HasMany} from "sequelize-typescript";
import { BaseModel } from '../../../shared/DB/base.model';
import { Workflow } from "src/features/workflows/entities/workflow.entity";
import { Notification } from "src/features/notifications/entities/notification.entity";

@Table({tableName: "apps"})
export class App extends BaseModel {

    @Column({field: 'name_ar'})
    name_ar : string;

    @Column({field: 'name_en'})
    name_en : string;
    
    @Column({field: 'counter'})
    counter : number

    @Column({field: 'icon'})
    icon : string;

    @Column({field: 'url'})
    url : string;

    @HasOne(() => Workflow)
    workflow: Workflow;

    @HasMany(() => Notification, 'model_id')
    notifications: Notification[];
}
