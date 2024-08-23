import { Column, OneToMany, Relation } from 'typeorm';
import { Exclude } from 'class-transformer';
import { AccessTokenEntity } from '../auth/entities/access-token.entity';
import { CommonEntity } from '../../common/entity/common.entity';

export class UserEntity extends CommonEntity {
  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ length: 32 })
  psalt: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ name: 'avatar', nullable: true })
  avatar: string;

  @Column({ nullable: true })
  qq: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  remark: string;

  @Column({ type: 'tinyint', nullable: true, default: 1 })
  status: number;

  @OneToMany(() => AccessTokenEntity, (accessToken) => accessToken.user, {
    cascade: true,
  })
  accessToken: Relation<AccessTokenEntity[]>;
}
