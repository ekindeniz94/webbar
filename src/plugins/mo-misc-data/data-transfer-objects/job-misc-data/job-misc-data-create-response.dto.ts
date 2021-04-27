import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';

export class JobMiscDataCreateResponseDto {
  @Expose()
  id: string;

  @Expose()
  langISO_639_1: string;

  @Expose()
  name: string;

  @Expose()
  bgColor: string;

  @Expose()
  textColor: string;

  @Expose()
  shortName: string;

  @Expose()
  tags: string[];

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

  @Type(() => JobMiscDataCreateResponseDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  translations: JobMiscDataCreateResponseDto;
}
