import { Expose, Type } from 'class-transformer';
import { UserDto } from '../../../mo-user';

export class JobMiscDataDto {
  @Expose()
  id: string;

  @Expose()
  seoUrl: string;

  @Expose()
  createdBy: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

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

  @Type(() => UserDto)
  @Expose()
  author: UserDto;

  @Expose()
  authorId: string;

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
