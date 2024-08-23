import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { RefreshTokenEntity } from './refresh-token.entity';
import { UserEntity } from '../../user/user.entity';

@Entity('user_access_tokens')
export class AccessTokenEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 500 })
  value!: string;

  @Column({ comment: 'Date expired' })
  expired_at: Date;

  @CreateDateColumn()
  created_at!: Date;

  @OneToOne(
    () => RefreshTokenEntity,
    (refreshToken) => refreshToken.accessToken,
    {
      cascade: true,
    },
  )
  refreshToken!: RefreshTokenEntity;

  @ManyToOne(() => UserEntity, (user) => user.accessToken, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;
}
