import { Expose, Transform, Type } from 'class-transformer';
import { CountryDto } from '@mogenius/database-dto';
import { ClusterPublicDto, OrganizationNameDto, ProductNameDto } from '../../mo-product-dto';

export class CreateProjectClusterItemDto {
  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Type(() => ProductNameDto)
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
