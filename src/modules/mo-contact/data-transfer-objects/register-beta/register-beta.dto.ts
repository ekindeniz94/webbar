import { Expose, Type } from 'class-transformer';
import { LanguageCodeDto } from '../../../mo-core';
import { RegisterBetaRoleEnum } from '../../enums';
import { BaseEntityDto } from '@mo/database-dto';

export class RegisterBetaDto extends BaseEntityDto {
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @Expose()
  fullName: string;

  @Expose()
  email: string;

  @Expose()
  role: RegisterBetaRoleEnum;

  @Type(() => Boolean)
  @Expose()
  agreedTermsConditions: boolean;
}
