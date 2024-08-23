import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export abstract class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;
}

export abstract class CompleleEntity extends CommonEntity {
  @ApiHideProperty()
  @Exclude()
  @Column({ name: 'create_by', update: false, nullable: true })
  createBy: number;

  @ApiHideProperty()
  @Exclude()
  @Column({ name: 'update_by', nullable: true })
  updateBy: number;
}
