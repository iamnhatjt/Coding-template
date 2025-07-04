import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { AccessTokenEntity } from '../auth/entities/access-token.entity';

const providers = [UserService];

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, AccessTokenEntity])],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class UserModule {}
