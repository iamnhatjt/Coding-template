import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IAppconfig } from './config/app.config';
import { ListGreConfig } from './constants/system.contanst';
import { ISwaggerConfig } from './config/swagger.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(
  app: INestApplication,
  configService: ConfigService,
): void {
  const { name } = configService.get<IAppconfig>(ListGreConfig.App);
  const { enable } = configService.get<ISwaggerConfig>(ListGreConfig.Swagger);

  if (!enable) return;

  const documentBuild = new DocumentBuilder()
    .setTitle(name)
    .setDescription(`${name} API document`)
    .setVersion('1.0');

  const document = SwaggerModule.createDocument(app, documentBuild.build());

  SwaggerModule.setup('api', app, document);

  const logger = new Logger('SwaggerModule');
  logger.log(`Documment runnign on .......`);
}
