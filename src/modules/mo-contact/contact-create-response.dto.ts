import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { BaseEntityDto } from '../mo-core';

export class ContactCreateResponseDto extends BaseEntityDto {
  // @Exclude()
  // createdBy: string;

  @Expose()
  langISO_639_1: string;

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

  @Type(() => ContactCreateResponseDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  translations: ContactCreateResponseDto;
}
