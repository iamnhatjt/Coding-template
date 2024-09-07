import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenEntity } from './entities/access-token.entity';
import { RefreshTokenEntity } from './entities/refresh-token.entity';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';

const controllers = [AuthController];

@Module({
  imports: [
    TypeOrmModule.forFeature([AccessTokenEntity, RefreshTokenEntity]),
    UserModule,
  ],
  controllers: [...controllers],
  exports: [TypeOrmModule],
})
export class AuthModule {}
