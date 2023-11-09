import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';
import { ClusterSetupDto } from './cluster-setup.dto';
import { BaseEntityDto, CountryDto } from '@mo/database-dto';
import { OrganizationNameDto } from '../organization';
import { ClusterBuildServerTypeEnum, ClusterProviderEnum, ClusterTypeEnum } from '../../enums';

export class ClusterDto extends BaseEntityDto {
  // @Type(() => ProductDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // products: ProductDto[];

  @Type(() => CountryDto)
  @Transform(({ value }) => (value?.code ? value : undefined))
  @Expose()
  country: CountryDto;

  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Transform(({ value }) => value ?? ClusterTypeEnum.BRING_YOUR_OWN)
  @Expose()
  type: ClusterTypeEnum;

  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;

  @Transform(({ value }) => value ?? ClusterBuildServerTypeEnum.MO_AZURE)
  @Expose()
  buildServerType: ClusterBuildServerTypeEnum;

  @Transform(({ value }) => value ?? 0)
  @Type(() => Number)
  @Expose()
  projectCountMax: number;

  @Type(() => Number)
  @Expose()
  projectCount: number;

  @Expose()
  region: string;

  @Expose()
  name: string;

  @Expose()
  icon: string;

  @Expose()
  image: string;

  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @Expose()
  loadbalancerIps: string[];

  @Expose()
  loadbalancerHost: string;

  // @Expose()
  // host: string;

  @Expose()
  displayName: string;

  @Expose()
  description: string;

  @Expose()
  cloudflareProxied: boolean;

  @Expose()
  clusterMfaId: string;

  @Expose()
  apiKey: string;

  @Expose()
  apiKeyIsActive: boolean;

  @Expose()
  appVersion: string;

  // @Expose()
  // spectrumSubDomain: string;

  @Transform(({ value }) => plainToInstance(ClusterSetupDto, value, { excludeExtraneousValues: true }))
  @Expose()
  clusterSetup: ClusterSetupDto;

  @Expose()
  containerRegistryUrl: string;

  @Expose()
  containerRegistryPath: string;

  @Expose()
  containerRegistryUser: string;

  @Expose()
  containerRegistryPat: string;
}
