import { Expose, Type } from 'class-transformer';
import { BaseEntityDto, LanguageCodeDto } from '../../../mo-core';

export class ContactDto extends BaseEntityDto {
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  interest: string;

  @Expose()
  subject: string;

  @Expose()
  message: string;
}
