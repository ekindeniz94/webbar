import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import {
  NamespaceServicePortBindingTypeEnum
} from '../../mo-namespace/enums/namespace-service-service-port-binding.enum';

export class AppPortDto extends BaseEntityDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Expose()
  expose: boolean;
}
