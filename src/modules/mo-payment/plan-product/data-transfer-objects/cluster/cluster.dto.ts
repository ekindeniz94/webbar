import { Expose, Type } from 'class-transformer';
import { BaseEntityDto, GeoCoordinatesDto } from '../../../../mo-core';

export class ClusterDto extends BaseEntityDto {
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

  @Expose()
  cloudflareTcpSubDomain: string;

  @Expose()
  cloudflareUdpSubDomain: string;

  get cloudflareTcpDomain(): string {
    return `${this.cloudflareTcpSubDomain}-${this.host}`;
  }

  get cloudflareUdpDomain(): string {
    return `${this.cloudflareUdpSubDomain}-${this.host}`;
  }
}
