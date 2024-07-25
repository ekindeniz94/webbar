import { Expose, Transform, Type } from 'class-transformer';
import { Max, Min } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';
import { ProjectNamespaceServicePortBindingEnum } from '../../../mo-project-dto/enums/project-namespace-service-port-binding.enum';
import moment from 'moment';

export class K8sResourceServiceContainerPortDto {
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Transform(({ value, obj }) => value ?? moment(obj?.metadata?.creationTimestamp).toDate(), { toClassOnly: true })
  @Expose()
  createdAt: string | Date;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.uid, { toClassOnly: true })
  @Expose()
  id: string;

  @Transform(({ value, obj }) => value ?? obj.protocol, { toClassOnly: true })
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Type(() => Number)
  @Transform(({ value, obj }) => value ?? obj.targetPort, { toClassOnly: true })
  @Min(0)
  @Max(65535)
  @Expose()
  internalPort: number;

  @Min(0)
  @Transform(({ value, obj }) => value ?? obj.port, { toClassOnly: true })
  @Max(65535)
  @Expose()
  externalPort: number;

  @TransformToBoolean(false)
  @Expose()
  expose: boolean;
}
