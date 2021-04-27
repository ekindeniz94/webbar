import { Expose, Transform, Type } from 'class-transformer';
import { UserDto } from '../../../mo-user';
import { isArray } from 'class-validator';

export class BlogMiscDataDto {
  @Expose()
  id: string;

  @Expose()
  langISO_639_1: string;

  @Expose()
  seoUrl: string;

  @Expose()
  createdBy: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

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
  teaserImage: string;

  @Expose()
  published: boolean;

  @Expose()
  authorDisplayName: string | undefined;

  @Type(() => UserDto)
  @Expose()
  author: UserDto;

  @Expose()
  authorId: string;

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
