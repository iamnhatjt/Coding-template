import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { ApiResult } from '../../common/decorators/api-result.decorator';
import { LoginToken } from './models/auth.models';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Login feature' })
  @ApiResult({ type: LoginToken })
  async login(@Body() dto: LoginDto): Promise<string> {
    return await this.authService.login(dto);
  }

  @Post('register')
  @ApiOperation({ summary: 'register' })
  async register(@Body() registerDto: RegisterDto): Promise<void> {
    await this.userService.register(registerDto);
  }
}
