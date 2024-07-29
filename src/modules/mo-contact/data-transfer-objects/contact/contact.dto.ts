import { Expose, Type } from 'class-transformer';
import { LanguageCodeDto } from '../../../mo-core';
import { BaseEntityDto } from '@mogenius/database-dto';

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
