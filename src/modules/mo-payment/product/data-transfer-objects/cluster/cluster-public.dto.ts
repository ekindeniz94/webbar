import { Expose, Type } from 'class-transformer';
import { GeoCoordinatesDto } from '../../../../mo-core';
import { ClusterVendorEnum } from '../../enums';
import { FilePublicDto } from '../../../../mo-file';
import { IsOptional } from 'class-validator';

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

  @Expose()
  displayName: string;

  @Expose()
  description: string;

  @Type(() => FilePublicDto)
  @Expose()
  icon: FilePublicDto;

  @Expose()
  vendor: ClusterVendorEnum;

  @Expose()
  cloudflareProxied: boolean;

  @Expose()
  @IsOptional()
  clusterARecordIps?: string[];

  get cloudflareTcpDomain(): string {
    return `${this.cloudflareTcpSubDomain}-${this.host}`;
  }

  get cloudflareUdpDomain(): string {
    return `${this.cloudflareUdpSubDomain}-${this.host}`;
  }
}
