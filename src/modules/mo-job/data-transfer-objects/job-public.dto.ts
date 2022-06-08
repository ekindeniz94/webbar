import { Expose, Transform, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { JobPublicTeaserImageDto } from './job-public-teaser-image.dto';
import moment from 'moment';

export class JobPublicDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
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

  @Type(() => JobPublicTeaserImageDto)
  @Expose()
  teaserImage: JobPublicTeaserImageDto;
}
