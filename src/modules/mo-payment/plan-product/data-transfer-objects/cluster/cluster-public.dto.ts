import { Expose, Type } from 'class-transformer';
import { BaseEntityDto, GeoCoordinatesDto } from '../../../../mo-core';

export class ClusterPublicDto extends BaseEntityDto {
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

  get cloudflareTcpDomain(): string {
    return `${this.cloudflareTcpSubDomain}-${this.host}`;
  }

  get cloudflareUdpDomain(): string {
    return `${this.cloudflareUdpSubDomain}-${this.host}`;
  }
}
