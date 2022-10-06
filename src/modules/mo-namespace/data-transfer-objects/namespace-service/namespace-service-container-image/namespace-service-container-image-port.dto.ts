import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsString } from 'class-validator';
import { NamespaceServicePortBindingTypeEnum } from '../../../enums';
import moment from 'moment';

export class NamespaceServiceContainerImagePortDto {
  @Expose()
  id: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  expose: boolean;

  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Type(() => Number)
  @Expose()
  internalPort: number;
}
