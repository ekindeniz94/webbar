import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';
import moment from 'moment';

export class NamespaceServicePortDto extends BaseEntityDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Type(() => Number)
  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Expose()
  expose: boolean;

  @Type(() => Boolean)
  @Expose()
  spectrumEnableTls: boolean;

  @Expose()
  spectrumAppId: string;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  deletedAt?: Date;
}
