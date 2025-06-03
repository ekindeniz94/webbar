import { Expose, Type } from 'class-transformer';
import { ClusterEventTypeEnum } from '../enums';
import { ClusterEventResourceDto } from './cluster-event-resource.dto';

export class ClusterEventDto {
  @Expose()
  clusterId: string;

  @Expose()
  eventType: ClusterEventTypeEnum;

  @Type(() => ClusterEventResourceDto)
  @Expose()
  resource: ClusterEventResourceDto;
}
