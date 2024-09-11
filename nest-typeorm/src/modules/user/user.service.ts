import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { EntityManager, Repository } from 'typeorm';
import { isEmpty } from 'class-validator';
import { randomvalue } from '../../utils/tool.utils';
import { md5 } from '../../utils/crypto.util';
import { BusinessException } from '../../common/exceptions/biz.exception';
import { ErrorEnum } from '../../constants/error-codes.constant';
import { UserStatus } from './constants';
import { RegisterDto } from '../auth/dto/auth.dto';

export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectEntityManager() private entityManager: EntityManager,
  ) {}

  async findUserByUserName(username: string): Promise<UserEntity | undefined> {
    return this.userRepository
      .createQueryBuilder('user')
      .where({
        username,
        status: UserStatus.Enabled,
      })
      .getOne();
  }

  async register(registerData: RegisterDto): Promise<void> {
    const exits = await this.userRepository.findOneBy({
      username: registerData.username,
    });
    if (!isEmpty(exits)) {
      throw new BusinessException(ErrorEnum.SYSTEM_USER_EXISTS); // need to define exceptions here
    }

    await this.entityManager.transaction(async (manager) => {
      const salt = randomvalue();
      const password = md5(`${registerData.password ?? 'a123456'} ${salt}`);

      const u = manager.create(UserEntity, {
        username: registerData.username,
        password,
        status: 1,
        psalt: salt,
      });

      return await manager.save(u);
    });
  }
}
