import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';

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

  @Expose()
  deletedAt?: Date;
}
