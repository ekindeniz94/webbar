import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isIP } from 'class-validator';
import _ from 'lodash';
import { BaseEntityDto, CountryDto } from '@mo/database-dto';
import { ClusterProviderEnum, ClusterTypeEnum } from '../../mo-product-dto';

export class CreateProjectClusterItemDto extends BaseEntityDto {
  @Transform(({ value }) => value ?? ClusterTypeEnum.BRING_YOUR_OWN)
  @Expose()
  type: ClusterTypeEnum;

  @Transform(({ value }) => value ?? ClusterProviderEnum.BRING_YOUR_OWN)
  @Expose()
  provider: ClusterProviderEnum;

  @Type(() => CountryDto)
  @Transform(({ value }) => (value?.code ? value : undefined))
  @Expose()
  country: CountryDto;

  @Expose()
  region: string;

  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

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
  productId: string;

  @Expose()
  productName: string;
}
