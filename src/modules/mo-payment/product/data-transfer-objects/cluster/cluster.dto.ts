import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { BaseEntityDto, CountryDto } from '../../../../mo-core';
import { ProductDto } from '../product';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';
import { ClusterSetupDto } from './cluster-setup.dto';

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
  name: string;

  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @Expose()
  loadbalancerIps: string[];

  @Expose()
  loadbalancerHost: string;

  @Expose()
  host: string;

  @Expose()
  displayName: string;

  @Expose()
  description: string;

  @Expose()
  cloudflareProxied: boolean;

  @Expose()
  clusterId: string;

  @Expose()
  apiKey: string;

  @Expose()
  apiKeyIsActive: boolean;

  @Expose()
  spectrumSubDomain: string;

  @Transform(({ value }) => plainToInstance(ClusterSetupDto, value, { excludeExtraneousValues: true }))
  @Expose()
  clusterSetup: ClusterSetupDto;

  get spectrumHost(): string {
    return `${this.spectrumSubDomain}-${this.name}`;
  }
}
