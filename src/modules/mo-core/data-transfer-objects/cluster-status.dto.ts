import { Expose, Type } from 'class-transformer';
import { GeoCoordinatesDto } from './geo-coordinates.dto';

export class ClusterStatusDto {
  @Expose()
  clustername: string;

  @Expose()
  location: string;

  @Expose()
  @Type(() => GeoCoordinatesDto)
  geoLocation: GeoCoordinatesDto;

  @Expose()
  localTime: string;

  @Expose()
  cloudflareResponseTime: string;

  @Expose()
  azureResponseTime: string;
}
