import { Expose, Transform, Type } from 'class-transformer';
import { UserPublicDto } from '../../../mo-user';
import { isArray } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { FilePublicDto } from '../../../mo-file';

export class BlogMiscDataDto extends BaseEntityDto {
  // @Exclude()
  // createdBy: string;

  @Expose()
  langISO_639_1: string;

  @Expose()
  authorId: string;

  @Type(() => UserPublicDto)
  @Expose()
  author: UserPublicDto;

  @Expose()
  seoUrl: string;

  @Expose()
  tags: string[];

  @Expose()
  topic: string;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  teaserText: string;

  @Expose()
  teaserImageId: string;

  @Type(() => FilePublicDto)
  @Expose()
  teaserImage: FilePublicDto;

  @Expose()
  published: boolean;

  @Type(() => BlogMiscDataDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  translations: BlogMiscDataDto[];

  get teaserTextString(): string {
    const content = this.teaserText?.replace(/<[^>]*>/g, '');
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
