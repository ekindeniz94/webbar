import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { JobPublicTeaserImageDto } from './job-public-teaser-image.dto';

export class JobPublicDto {
  @Expose()
  id: string;

  @Expose()
  createdAt: Date;

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
