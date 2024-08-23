import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenEntity } from './entities/access-token.entity';
import { RefreshTokenEntity } from './entities/refresh-token.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccessTokenEntity, RefreshTokenEntity]),
    UserModule,
  ],
  exports: [TypeOrmModule],
})
export class AuthModule {}
