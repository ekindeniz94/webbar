import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core/data-transfer-objects/base.entity.dto';
import { GeoCoordinatesDto } from '../../../../mo-core/data-transfer-objects/geo-coordinates.dto';

export class ClusterDto extends BaseEntityDto  {
  @Expose()
  region: string;
  
  @Expose()
  @Type(() => GeoCoordinatesDto)
  geoLocation: GeoCoordinatesDto;

  @Expose()
  name: string;

  @Expose()
  loadbalancerIp: string;

  @Expose()
  k8smanagerUrl: string;

  @Expose()
  host: string;
}