import { Expose } from 'class-transformer';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums/project-namespace-service-port-binding.enum';
import { TransformToBoolean } from '@mo/js-utils';

export class K8sPortsDto {
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @TransformToBoolean(false)
  @Expose()
  expose: boolean;
}
