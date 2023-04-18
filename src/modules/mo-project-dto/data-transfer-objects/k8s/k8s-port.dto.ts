import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums/project-namespace-service-port-binding.enum';

export class K8sPortsDto {
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;
}
