import {
  IsEmail,
  IsNotEmpty,
  isString,
  IsString,
  MaxLength,
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class UserInviteRequestDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(320)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 320))
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 64))
  @Expose()
  groupId: string;
}
