import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../../mo-namespace';

export class ServicePortDto extends BaseEntityDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Expose()
  expose: boolean;
}
