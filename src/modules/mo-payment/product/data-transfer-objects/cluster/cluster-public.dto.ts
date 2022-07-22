import { Expose, Type } from 'class-transformer';
import { GeoCoordinatesDto } from '../../../../mo-core';

export class ClusterPublicDto {
  @Expose()
  id: string;

  @Expose()
  region: string;

  @Expose()
  @Type(() => GeoCoordinatesDto)
  geoLocation: GeoCoordinatesDto;

  @Expose()
  name: string;

  @Expose()
  host: string;

  @Expose()
  cloudflareTcpSubDomain: string;

  @Expose()
  cloudflareUdpSubDomain: string;

  @Expose()
  loadbalancerHost: string;

  get cloudflareTcpDomain(): string {
    return `${this.cloudflareTcpSubDomain}-${this.host}`;
  }

  get cloudflareUdpDomain(): string {
    return `${this.cloudflareUdpSubDomain}-${this.host}`;
  }
}
