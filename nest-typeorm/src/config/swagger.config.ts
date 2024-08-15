import { ConfigType, registerAs } from '@nestjs/config';
import { EnvKey, ListGreConfig } from 'src/constants/system.contanst';
import { env } from 'src/global/env';

export const SwaggerConfig = registerAs(ListGreConfig.Swagger, () => ({
  enable: env(EnvKey.EnableSwagger),
}));

export type ISwaggerConfig = ConfigType<typeof SwaggerConfig>;
