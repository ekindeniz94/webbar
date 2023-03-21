import { Expose, Type } from 'class-transformer';
import { ClusterNodeDto } from './cluster-node.dto';
import { BaseEntityDto } from '../../../../mo-core';

export class ClusterResourceInfoPayloadDto extends BaseEntityDto {
  // TODO
  @Expose()
  loadBalancerIps: any[];

  @Type(() => ClusterNodeDto)
  @Expose()
  nodeStats: ClusterNodeDto[];
}
