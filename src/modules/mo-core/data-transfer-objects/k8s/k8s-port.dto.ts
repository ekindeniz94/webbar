import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServicePortBindingTypeEnum } from '../../../mo-namespace/enums/namespace-service-service-port-binding.enum';
import moment from 'moment';
import { isBoolean } from 'class-validator';

export class K8sPortsDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;
}
