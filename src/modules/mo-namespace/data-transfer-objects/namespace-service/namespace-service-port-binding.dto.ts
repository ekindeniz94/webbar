import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';

export class NamespaceServicePortBindingDto extends BaseEntityDto {
  @Expose()
  port: number;

  @Expose()
  type: NamespaceServicePortBindingTypeEnum;

  @Expose()
  namespaceId: string;

  @Expose()
  namespaceName: string;

  @Expose()
  serviceName: string;

  @Expose()
  spectrumAppId?: string;
}
