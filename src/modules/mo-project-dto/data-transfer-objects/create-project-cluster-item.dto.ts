import { Expose, Transform, Type } from 'class-transformer';
import { CountryDto } from '@mo/database-dto';
import { ClusterPublicDto, OrganizationNameDto } from '../../mo-product-dto';

export class CreateProjectClusterItemDto {
  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Type(() => ClusterPublicDto)
  @Expose()
  cluster: ClusterPublicDto;

  @Type(() => CountryDto)
  @Transform(({ value }) => (value?.code ? value : undefined))
  @Expose()
  country: CountryDto;
}
