import { Expose, Transform, Type } from 'class-transformer';
import { PersistentFileTypeEnum } from '../enums';
import moment from 'moment';

export class PersistentFileDto {
  @Expose()
  name: string;

  @Expose()
  type: PersistentFileTypeEnum;

  @Expose()
  relativePath: string;

  @Expose()
  absolutePath: string;

  @Type(() => Boolean)
  @Expose()
  isSymbolicLink: boolean;

  @Expose()
  extension?: string;

  @Type(() => Number)
  @Expose()
  sizeInBytes: number;

  @Expose()
  size: string;

  @Expose()
  hash: string;

  @Expose()
  mimeType?: string;

  @Expose()
  contentType?: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt?: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  modifiedAt?: Date;

  @Expose()
  uid_gid?: string;
}
