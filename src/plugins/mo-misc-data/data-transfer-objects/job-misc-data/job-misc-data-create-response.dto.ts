import { Expose } from 'class-transformer';

export class JobMiscDataCreateResponseDto {
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
}
