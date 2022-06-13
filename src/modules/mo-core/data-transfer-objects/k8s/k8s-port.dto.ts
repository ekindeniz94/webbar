import { Expose, Transform } from 'class-transformer';
import { NamespaceServicePortBindingTypeEnum } from '../../../mo-namespace/enums/namespace-service-service-port-binding.enum';
import moment from 'moment';

export class K8sPortsDto {
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Expose()
  expose: boolean;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  deletedAt?: Date;
}
