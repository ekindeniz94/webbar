import { Expose, Type } from 'class-transformer';
import { ClusterEventTypeEnum } from '../enums';

export class ClusterEventDto {
  @Expose()
  clusterId: string;

  @Expose()
  eventType: ClusterEventTypeEnum;

  @Expose()
  groupVersion: string;

  @Expose()
  kind: string;

  @Expose()
  name: string;

  @Expose()
  namespace: string;
}
