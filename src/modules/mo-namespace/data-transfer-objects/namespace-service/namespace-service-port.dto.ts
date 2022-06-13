import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';
import moment from 'moment';
import { Max, Min } from 'class-validator';

export class NamespaceServicePortDto extends BaseEntityDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Type(() => Number)
  @Min(0)
  @Max(65535)
  @Expose()
  internalPort: number;

  @Min(0)
  @Max(65535)
  @Expose()
  externalPort: number;

  @Expose()
  expose: boolean;

  @Type(() => Boolean)
  @Expose()
  spectrumEnableTls: boolean;

  @Expose()
  spectrumAppId: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  deletedAt?: Date;
}
