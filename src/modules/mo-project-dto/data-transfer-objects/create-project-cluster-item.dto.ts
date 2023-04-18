import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto, CountryDto } from '@mo/database-dto';
import { ClusterPublicDto, OrganizationNameDto, ProductNameDto } from '../../mo-product-dto';

export class CreateProjectClusterItemDto {
  @Type(() => ClusterPublicDto)
  @Expose()
  organization: OrganizationNameDto;

  @Type(() => ClusterPublicDto)
  @Expose()
  product: ProductNameDto;

  @Type(() => ClusterPublicDto)
  @Expose()
  cluster: ClusterPublicDto;

  @Type(() => CountryDto)
  @Transform(({ value }) => (value?.code ? value : undefined))
  @Expose()
  country: CountryDto;
}
