import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenEntity } from './entities/access-token.entity';
import { RefreshTokenEntity } from './entities/refresh-token.entity';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './services/token.service';
import { JwtService } from '@nestjs/jwt';

const controllers = [AuthController];
const providers = [AuthService, TokenService, JwtService];

@Module({
  imports: [
    TypeOrmModule.forFeature([AccessTokenEntity, RefreshTokenEntity]),
    UserModule,
  ],
  controllers: [...controllers],
  providers: [...providers],
  exports: [TypeOrmModule],
})
export class AuthModule {}
