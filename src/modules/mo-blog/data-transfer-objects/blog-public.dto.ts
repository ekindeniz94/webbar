import { BlogPublicTeaserImageDto } from './blog-public-teaser-image.dto';
import { Expose, Transform, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import moment from 'moment';

export class BlogPublicDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Expose()
  author: string;

  @IsString({ each: true })
  @Expose()
  tags: string[];

  @Expose()
  topic: string;

  @Expose()
  title: string;

  @Expose()
  teaserContent: string;

  @Expose()
  content: string;

  @Expose()
  seoUrl: string;

  @Type(() => BlogPublicTeaserImageDto)
  @Expose()
  teaserImage: BlogPublicTeaserImageDto;
}
