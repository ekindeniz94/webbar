/*import { Expose, Transform } from 'class-transformer';
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
*/
import { Expose, Transform } from 'class-transformer';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';
import { ClusterBuildServerTypeEnum, ClusterProviderEnum, ClusterTypeEnum } from '../../enums';
import { ApiProperty } from '@nestjs/swagger';

export class ClusterPublicDto {
  @ApiProperty({
    type: String,
    description: 'Unique identifier for the cluster',
    example: 'cluster-id-123',
    required: true
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: String,
    description: 'Region where the cluster is located',
    example: 'us-east-1',
    required: true
  })
  @Expose()
  region: string;

  @ApiProperty({
    type: String,
    description: 'Human-readable display name for the cluster',
    example: 'Production Cluster',
    required: true
  })
  @Expose()
  displayName: string;

  @ApiProperty({
    enum: ClusterTypeEnum,
    description: 'Type of cluster',
    example: ClusterTypeEnum.BRING_YOUR_OWN,
    default: ClusterTypeEnum.BRING_YOUR_OWN,
    required: true
  })
  @Transform(({ value }) => value ?? ClusterTypeEnum.BRING_YOUR_OWN)
  @Expose()
  type: ClusterTypeEnum;

  @ApiProperty({
    enum: ClusterProviderEnum,
    description: 'Cloud provider hosting the cluster',
    example: ClusterProviderEnum.UNKNOWN,
    default: ClusterProviderEnum.UNKNOWN,
    required: true
  })
  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;

  @ApiProperty({
    enum: ClusterBuildServerTypeEnum,
    description: 'Type of build server configuration',
    example: ClusterBuildServerTypeEnum.IN_CLUSTER,
    default: ClusterBuildServerTypeEnum.IN_CLUSTER,
    required: true
  })
  @Transform(({ value }) => value ?? ClusterBuildServerTypeEnum.IN_CLUSTER)
  @Expose()
  buildServerType: ClusterBuildServerTypeEnum;

  @ApiProperty({
    type: String,
    description: 'Icon URL or identifier for the cluster',
    example: 'https://example.com/icon.png',
    required: true
  })
  @Expose()
  icon: string;

  @ApiProperty({
    type: String,
    description: 'Image URL or identifier for the cluster',
    example: 'https://example.com/cluster-image.png',
    required: true
  })
  @Expose()
  image: string;

  @ApiProperty({
    type: String,
    description: 'Load balancer hostname',
    example: 'lb.cluster.example.com',
    required: true
  })
  @Expose()
  loadbalancerHost: string;

  @ApiProperty({
    type: String,
    description: 'Description of the cluster',
    example: 'Production cluster for web applications',
    required: true
  })
  @Expose()
  description: string;

  @ApiProperty({
    type: String,
    description: 'Application version running on the cluster',
    example: '1.2.3',
    required: true
  })
  @Expose()
  appVersion: string;

  @ApiProperty({
    type: [String],
    description: 'Array of load balancer IP addresses',
    example: ['192.168.1.1', '10.0.0.1'],
    required: true,
    isArray: true
  })
  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @Expose()
  loadbalancerIps: string[];
}