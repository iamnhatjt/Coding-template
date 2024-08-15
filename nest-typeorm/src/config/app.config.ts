import { ConfigType, registerAs } from '@nestjs/config';
import { ListGreConfig, EnvKey } from 'src/constants/system.contanst';
import { env } from 'src/global/env';

export const AppConfig = registerAs(ListGreConfig.App, () => ({
  name: env(EnvKey.AppName),
}));

export type IAppconfig = ConfigType<typeof AppConfig>;
