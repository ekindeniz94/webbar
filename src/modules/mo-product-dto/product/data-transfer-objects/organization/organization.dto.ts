import { Expose, instanceToPlain, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { AddressDto, BaseEntityDto } from '@mogenius/database-dto';
import { ClusterDto } from '../cluster';
import { UserPublicDto } from '@mogenius/user-dto';
import { ProductDto } from '../product';
import { OrganizationUserGroupDto } from './organization-user-group.dto';

export class OrganizationDto extends BaseEntityDto {
  @Type(() => ClusterDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  clusters: ClusterDto[];

  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => ProductDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  products: ProductDto[];

  @Expose()
  name: string;

  @Expose()
  vatNumber: string;

  @Type(() => AddressDto)
  @Transform(({ value }) => {
    let isEmpty = false;
    try {
      isEmpty = JSON.stringify(instanceToPlain(value)) === JSON.stringify({});
    } catch (e) {}
    return isEmpty ? undefined : value;
  })
  @Expose()
  address: AddressDto;

  @Type(() => OrganizationUserGroupDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  organizationUserGroups: OrganizationUserGroupDto[];
}
