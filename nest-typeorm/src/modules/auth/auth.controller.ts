import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/registerDto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'register' })
  async register(@Body() registerDto: RegisterDto): Promise<void> {
    await this.userService.register(registerDto);
  }
}
