import { Expose, Transform, Type } from 'class-transformer';
import { ServiceControllerEnum } from '../../../mo-project-dto';
import { IdDto } from '@mogenius/core-dto';

export class K8sResourceServiceFlatDto {
  @Transform(({ value, obj }) => value ?? obj?.metadata?.uid, { toClassOnly: true })
  @Expose()
  id: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Type(() => IdDto)
  @Expose()
  projectNamespaceId: IdDto;
}
