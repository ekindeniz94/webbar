// import { Expose, Transform, Type } from 'class-transformer';
// import { ClusterNodeDto } from './cluster-node.dto';
// import _ from 'lodash';
// import { BaseEntityDto, CountryDto } from '@mogenius/database-dto';
// import { ClusterProviderEnum } from '../../enums';
//
// export class ClusterStatusPayloadDto  {
//   @Expose()
//   clusterName: string;
//
//   @Expose()
//   pods: number;
//
//   @Expose()
//   podCpuUsageInMilliCores: number;
//
//   @Expose()
//   podCpuLimitInMilliCores: number;
//
//   @Expose()
//   podMemoryUsageInBytes: number;
//
//   @Expose()
//   podMemoryLimitInBytes: number;
//
//   @Expose()
//   ephemeralStorageLimitInBytes: number;
//
//   @Expose()
//   currentTime: string;
//
//   @Expose()
//   kubernetesVersion: string;
//
//   @Expose()
//   platform: string;
//
//   @Type(() => ClusterNodeDto)
//   @Expose()
//   nodeStats: ClusterNodeDto[];
//
//   @Type(() => CountryDto)
//   @Expose()
//   country: CountryDto;
//
//   @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
//   @Expose()
//   provider: ClusterProviderEnum;
// }
