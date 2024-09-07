import { DataSource, DataSourceOptions } from 'typeorm';
import { env, envNumber } from 'src/global/env';
import { EnvKey, ListGreConfig } from 'src/constants/system.contanst';
import { ConfigType, registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: env(EnvKey.DBHost, '127.0.0.1'),
  port: envNumber(EnvKey.DBPort, 3306),
  username: env(EnvKey.DBUserName),
  password: env(EnvKey.DBPassWord),
  database: env(EnvKey.DBDataBase),
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: [__dirname + 'migrations/*{.ts,.js}'],
  subscribers: [__dirname + 'modules/**/*.subscriber{.ts,.js}'],
  synchronize: true,
};

export const DataBaseConfig = registerAs(
  ListGreConfig.DataBase,
  (): DataSourceOptions => dataSourceOption,
);

export type IDataBaseConfig = ConfigType<typeof DataBaseConfig>;

const dataSource = new DataSource(dataSourceOption);
export default dataSource;
