import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import {
  NamespaceServicePortBindingTypeEnum2
} from '../../mo-namespace/enums/namespace-service-service-port-binding.enum';

export class AppPortDto extends BaseEntityDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum2;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Expose()
  expose: boolean;
}
