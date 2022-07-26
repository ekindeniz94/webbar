import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto, CountryDto, GeoCoordinatesDto } from '../../../../mo-core';
import { ProductDto } from '../product';
import { isArray } from 'class-validator';

export class ClusterDto extends BaseEntityDto {
  @Type(() => ProductDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  products: ProductDto[];

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;

  @Type(() => Number)
  @Expose()
  namespaceMaxCount: number;

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
  loadbalancerHost: string;

  @Expose()
  k8smanagerUrl: string;

  @Expose()
  containerRegistryUrl: string;

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
