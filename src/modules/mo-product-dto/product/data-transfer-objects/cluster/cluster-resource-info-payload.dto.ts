import { Expose, Transform, Type } from 'class-transformer';
import { ClusterNodeDto } from './cluster-node.dto';
import { isArray, IsString } from 'class-validator';
import _ from 'lodash';
import { BaseEntityDto } from '@mo/database-dto';

export class ClusterResourceInfoPayloadDto extends BaseEntityDto {
  @IsString({ each: true })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []) as string[])
  @Expose()
  loadBalancerExternalIps: string[];

  @Type(() => ClusterNodeDto)
  @Expose()
  nodeStats: ClusterNodeDto[];
}
