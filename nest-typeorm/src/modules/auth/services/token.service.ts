import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenEntity } from '../entities/access-token.entity';
import dayjs from 'dayjs';
import { UserEntity } from 'src/modules/user/user.entity';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  async refreshToken(accessToken: AccessTokenEntity) {
    const { user, refreshToken } = accessToken;

    if (refreshToken) {
      const now = dayjs();
      if (now.isAfter(refreshToken.expired_at)) return null;
    }
  }

  async generateAccessToken(uid: number, roles: string[] = []) {
    const payload: IAuthUser = {
      uid,
      pv: 1,
      roles,
    };

    const jwtSign = await this.jwtService.signAsync(payload);

    const accessToken = new AccessTokenEntity();
    accessToken.value = jwtSign;
    accessToken.user = { id: uid } as UserEntity;
    // accessToken.expired_at = dayjs().add('12').toDate();

    await accessToken.save();
  }
}
