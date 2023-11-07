import { Expose, Transform, Type } from 'class-transformer';
import { ClusterNodeDto } from './cluster-node.dto';
import { isArray, isEnum, IsString } from 'class-validator';
import _ from 'lodash';
import { BaseEntityDto, CountryDto } from '@mo/database-dto';
import { ClusterProviderEnum } from '../../enums';

export class ClusterResourceInfoPayloadDto extends BaseEntityDto {
  @IsString({ each: true })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []) as string[])
  @Expose()
  loadBalancerExternalIps: string[];

  @Type(() => ClusterNodeDto)
  @Expose()
  nodeStats: ClusterNodeDto[];

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;

  // @Transform(({ value }) => (isEnum(ClusterProviderEnum, value) ? value : undefined))
  @Expose()
  provider: ClusterProviderEnum;
}
