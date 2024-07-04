import { Expose, Transform } from 'class-transformer';
import { ServiceControllerEnum } from '../../../mo-project-dto/enums/service-controller.enum';

export class K8sResourceServiceListItemDto {
  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;
}
