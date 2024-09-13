import { Expose, Transform, Type } from 'class-transformer';
import { ClusterNodeDto } from './cluster-node.dto';
import { isArray, isIP, IsString } from 'class-validator';
import _ from 'lodash';
import { BaseEntityDto, CountryDto } from '@mogenius/database-dto';
import { ClusterProviderEnum } from '../../enums';

export class ClusterStatusPayloadDto extends BaseEntityDto {
  @IsString({ each: true })
  @Transform(({ value }) => {
    value = (value && isArray(value) ? _.uniq(value) : []) as string[];
    return value
      .map((item: string) => {
        if (item === 'localhost') {
          return '127.0.0.1';
        }
        return item;
      })
      .filter((item: string) => isIP(item));
  })
  @Expose()
  loadBalancerExternalIps: string[];

  @Type(() => ClusterNodeDto)
  @Expose()
  nodeStats: ClusterNodeDto[];

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;

  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;
}
