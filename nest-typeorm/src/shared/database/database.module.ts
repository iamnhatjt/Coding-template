import { Module } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource, LoggerOptions } from 'typeorm';

import { TypeORMLogger } from './typeorm-logger';
import { env } from 'src/global/env';
import { IDataBaseConfig } from 'src/config/database.config';

const providers = [];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        let loggerOptions: LoggerOptions = env('DB_LOGGING') as 'all';

        try {
          loggerOptions = JSON.parse(loggerOptions);
        } catch {}

        return {
          ...configService.get<IDataBaseConfig>('database'),
          autoLoadEntities: true,
          logging: loggerOptions,
          logger: new TypeORMLogger(loggerOptions),
        };
      },
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  providers,
  exports: providers,
})
export class DatabaseModule {}
