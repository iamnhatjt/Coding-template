import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';
import { ConfigService } from '@nestjs/config';
import { LoggingInterceptor } from './common/interceptors/loging.interceptor';
import { envNumber } from './global/env';
import { EnvKey } from './constants/system.contanst';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.useGlobalInterceptors(new LoggingInterceptor());

  //Swagger setup
  setupSwagger(app, configService);

  await app.listen(envNumber(EnvKey.APPPort, 3000));
}
bootstrap();
