import { BlogPublicTeaserImageDto } from './blog-public-teaser-image.dto';
import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class BlogPublicDto {
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

  @Type(() => BlogPublicTeaserImageDto)
  @Expose()
  teaserImage: BlogPublicTeaserImageDto;
}
