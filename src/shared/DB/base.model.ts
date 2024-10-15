import { UUIDV4 } from 'sequelize';
import {
  Column,
  PrimaryKey,
  IsUUID,
  CreatedAt,
  UpdatedAt,
  Model,
  DataType,
} from 'sequelize-typescript';

export class BaseModel extends Model {
  @PrimaryKey
  @IsUUID('4')
  @Column({ type: DataType.UUIDV4, defaultValue: UUIDV4 })
  id: string;

  @Column({field: 'created_at',type: DataType.DATE,})
  @CreatedAt
  createdAt: string;

  @Column({ field: 'updated_at', type: DataType.DATE })
  @UpdatedAt
  updatedAt: string;
}
