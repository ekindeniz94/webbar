import { BaseEntityDto, LanguageCodeDto } from '../../mo-core';
import { Expose, Type } from 'class-transformer';

export class FileTranslationDto extends BaseEntityDto {
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @Expose()
  seoUrl: string;

  @Expose()
  altText: string;

  @Expose()
  title: string;

  @Expose()
  caption: string;

  @Expose()
  copyright: string;

  @Expose()
  published: boolean;

  @Expose()
  deletedAt?: Date;
}
