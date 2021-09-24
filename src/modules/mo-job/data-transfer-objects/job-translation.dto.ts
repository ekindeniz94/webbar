import { BaseEntityDto, LanguageCodeDto } from '../../mo-core';
import { Expose, Type } from 'class-transformer';
import { FileDto } from '../../mo-file';

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

  @Type(() => FileDto)
  @Expose()
  teaserImage: FileDto;

  @Expose()
  seoUrl: string;

  @Expose()
  published: boolean;

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
