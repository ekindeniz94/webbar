import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';

export class ContactMiscDataCreateResponseDto {
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

  @Type(() => ContactMiscDataCreateResponseDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  translations: ContactMiscDataCreateResponseDto;
}
