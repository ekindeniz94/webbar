import { LanguageCodeDto } from '../../mo-core';
import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '@mo/database-dto';

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

  @Type(() => Boolean)
  @Expose()
  published: boolean;

  @Type(() => Boolean)
  @Expose()
  defaultTranslation: boolean;

  @Transform(({ value, obj }) => {
    if (value && value.indexOf(`/${obj.seoUrl}`) === -1) {
      return `${value}/${obj.seoUrl}`;
    }
    return value;
  })
  @Expose()
  link: string;
}
