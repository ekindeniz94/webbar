import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class BlogMiscDataCreateResponseDto {
  @Expose()
  id: string;

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
}
