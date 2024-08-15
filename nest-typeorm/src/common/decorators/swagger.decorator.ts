import { applyDecorators } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';
import { Security } from 'src/constants/system.contanst';

export function ApiSecurityAuth(): ClassDecorator & MethodDecorator {
  return applyDecorators(ApiSecurity(Security.auth));
}
