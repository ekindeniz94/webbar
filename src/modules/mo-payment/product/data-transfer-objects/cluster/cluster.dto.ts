import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto, CountryDto, GeoCoordinatesDto } from '../../../../mo-core';
import { ProductDto } from '../product';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';
import { ClusterVendorEnum } from '../../enums';
import { FileDto } from '../../../../mo-file';

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

  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @Expose()
  loadbalancerIps: string[];

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

  @Expose()
  displayName: string;

  @Expose()
  description: string;

  @Type(() => FileDto)
  @Expose()
  icon: FileDto;

  @Expose()
  vendor: ClusterVendorEnum;

  @Expose()
  cloudflareProxied: boolean;

  get cloudflareTcpDomain(): string {
    return `${this.cloudflareTcpSubDomain}-${this.host}`;
  }

  get cloudflareUdpDomain(): string {
    return `${this.cloudflareUdpSubDomain}-${this.host}`;
  }
}
