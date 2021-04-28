import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';

export class ContactMiscDataDto {
  @Expose()
  id: string;

  @Expose()
  langISO_639_1: string;

  @Expose()
  createdBy: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  interest: string;

  @Expose()
  subject: string;

  @Expose()
  message: string;

  @Expose()
  subscribeNewsletter: boolean;

  @Type(() => ContactMiscDataDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  translations: ContactMiscDataDto[];

  get teaserTextString(): string {
    const content = this.subject?.replace(/<[^>]*>/g, '');
    if (content?.length > 20) {
      return `${content.slice(0, 20)}...`;
    }
    return content;
  }

  get contentString(): string {
    const content = this.message?.replace(/<[^>]*>/g, '');
    if (content.length > 20) {
      return `${content.slice(0, 20)}...`;
    }
    return content;
  }
}
