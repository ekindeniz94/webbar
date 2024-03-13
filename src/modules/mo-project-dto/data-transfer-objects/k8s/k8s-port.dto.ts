import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums/project-namespace-service-port-binding.enum';
import { MoUtils } from '@mo/js-utils';

export class K8sPortsDto {
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Type(() => Boolean)
  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  expose: boolean;
}
