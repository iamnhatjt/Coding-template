import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthModule } from '../auth/auth.module';
import { UserService } from './user.service';

const providers = [UserService];

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class UserModule {}
