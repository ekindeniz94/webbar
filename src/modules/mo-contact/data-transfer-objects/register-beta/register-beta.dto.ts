import { Expose, Type } from 'class-transformer';
import { BaseEntityDto, LanguageCodeDto } from '../../../mo-core';
import { RegisterBetaRoleEnum } from '../../enums';

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
}
