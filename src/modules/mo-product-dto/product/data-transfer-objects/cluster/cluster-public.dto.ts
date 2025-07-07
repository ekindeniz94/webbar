import { Expose, Transform } from 'class-transformer';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';
import { ClusterBuildServerTypeEnum, ClusterProviderEnum, ClusterTypeEnum } from '../../enums';
import { ApiProperty } from '@nestjs/swagger';

export class ClusterPublicDto {
  @ApiProperty({
    type: String,
    description: 'Unique identifier for the cluster',
    example: 'cluster-id',
    required: true
  })
  @Expose()
  id: string;

  @Expose()
  region: string;

  @Expose()
  displayName: string;

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

  // @Expose()
  // host: string;

  // @Expose()
  // spectrumSubDomain: string;

  @Expose()
  loadbalancerHost: string;

  @Expose()
  description: string;

  @Expose()
  appVersion: string;

  // @TransformToBoolean(false)
  // @Expose()
  // cloudflareProxied: boolean;
  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @Expose()
  loadbalancerIps: string[];

  // get spectrumHost(): string {
  //   return `${this.spectrumSubDomain}-${this.name}`;
  // }
}
