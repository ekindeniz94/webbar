import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';
import { ClusterSetupDto } from './cluster-setup.dto';
import { ClusterBuildServerTypeEnum, ClusterProviderEnum, ClusterTypeEnum } from '../../enums';
import { BaseEntityDto } from '@mo/database-dto';
import { TransformToBoolean } from '@mo/js-utils';

export class ClusterFlatDto extends BaseEntityDto {
  @Type(() => Number)
  @Expose()
  projectCountMax: number;

  @Expose()
  region: string;

  @Transform(({ value }) => value ?? ClusterTypeEnum.BRING_YOUR_OWN)
  @Expose()
  type: ClusterTypeEnum;

  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;

  @Transform(({ value }) => value ?? ClusterBuildServerTypeEnum.IN_CLUSTER)
  @Expose()
  buildServerType: ClusterBuildServerTypeEnum;

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

  // @TransformToBoolean(false)
  // @Expose()
  // cloudflareProxied: boolean;

  @Expose()
  clusterMfaId: string;

  @Expose()
  apiKey: string;

  @TransformToBoolean(false)
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
