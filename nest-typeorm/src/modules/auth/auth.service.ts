import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { isEmpty } from 'class-validator';
import { BusinessException } from '../../common/exceptions/biz.exception';
import { ErrorEnum } from '../../constants/error-codes.constant';
import { md5 } from '../../utils/crypto.util';
import { TokenService } from './services/token.service';
import { Roles } from './auth.constant';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async login(data: LoginDto): Promise<string> {
    const user = await this.userService.findUserByUserName(data.username);
    if (isEmpty(user)) {
      throw new BusinessException(ErrorEnum.INVALID_USERNAME_PASSWORD);
    }

    const comparePassword = md5(`${data.password}${user.psalt}`);

    if (user.password !== comparePassword) {
      throw new BusinessException(ErrorEnum.INVALID_USERNAME_PASSWORD);
    }

    const token = await this.tokenService.generateAccessToken(user.id, [
      Roles.USER,
    ]);

    return token.value;
  }
}
