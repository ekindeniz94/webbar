import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';

export class NamespaceServicePortDto extends BaseEntityDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Expose()
  port: number;

  @Expose()
  spectrumEnableTls: boolean;

  @Expose()
  spectrumAppId: string;

  @Expose()
  deletedAt?: Date;
}
