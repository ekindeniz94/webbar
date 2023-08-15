import { Expose, Transform, Type } from 'class-transformer';
import { GroupDto } from '@mo/user-dto';
import { ProductFlatDto } from '../product';
import { isArray } from 'class-validator';

export class OrganizationPermissionDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Type(() => GroupDto)
  @Expose()
  organizationGroups: GroupDto[];

  @Type(() => ProductFlatDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  products: ProductFlatDto[];
}
