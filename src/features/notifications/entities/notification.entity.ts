import {Column , Table , BelongsTo , DataType} from 'sequelize-typescript';
import { BaseModel } from '../../../shared/DB/base.model';
import { App } from 'src/features/apps/entities/app.entity';

@Table({ tableName : 'notifications'})
export class Notification extends BaseModel {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
      })
      id: string;

    @Column({field: 'model_id'})
    model_id : string;

    @Column({field: 'status'})
    status : string;

    @Column({field: 'message'})
    message : string;

    @Column({field: 'action'})
    action : string;

    @BelongsTo(() => App, 'model_id')
     inquiry: App;

    

}
