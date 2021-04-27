import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';

export class BlogMiscDataCreateResponseDto {
  @Expose()
  id: string;

  @Expose()
  langISO_639_1: string;

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

  @Type(() => BlogMiscDataCreateResponseDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  translations: BlogMiscDataCreateResponseDto[];
}
