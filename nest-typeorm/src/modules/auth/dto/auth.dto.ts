import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  username: string;

  @Matches(/^\S*(?=\S{6})(?=\S*\d)(?=\S*[A-Z])\S*$/i)
  @MinLength(6)
  password: string;
}

export class RegisterDto {
  @ApiProperty({ description: '账号' })
  @IsString()
  username: string;

  @ApiProperty({ description: '密码' })
  @IsString()
  @Matches(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Za-z])\S*$/)
  @MinLength(6)
  @MaxLength(16)
  password: string;

  @ApiProperty({ description: '语言', examples: ['EN', 'ZH'] })
  @IsString()
  lang: string;
}
