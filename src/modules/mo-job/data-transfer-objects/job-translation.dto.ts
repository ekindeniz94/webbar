import { BaseEntityDto, LanguageCodeDto } from '../../mo-core';
import { Expose, Type } from 'class-transformer';

export class JobTranslationDto extends BaseEntityDto {
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @Expose()
  tags: string[];

  @Expose()
  title: string;

  @Expose()
  teaserContent: string;

  @Expose()
  content: string;

  @Expose()
  seoUrl: string;

  @Type(() => Boolean)
  @Expose()
  published: boolean;

  @Type(() => Boolean)
  @Expose()
  defaultTranslation: boolean;

  get teaserTextString(): string {
    const content = this.teaserContent?.replace(/<[^>]*>/g, '');
    if (content?.length > 20) {
      return `${content.slice(0, 20)}...`;
    }
    return content;
  }

  get contentString(): string {
    const content = this.content?.replace(/<[^>]*>/g, '');
    if (content.length > 20) {
      return `${content.slice(0, 20)}...`;
    }
    return content;
  }
}
