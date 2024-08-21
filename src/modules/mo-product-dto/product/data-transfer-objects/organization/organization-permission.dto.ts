import { Expose, Transform, Type } from 'class-transformer';
import { GroupDto } from '@mogenius/user-dto';
import { ProductFlatDto } from '../product';
import { isArray, IsOptional, IsString } from 'class-validator';

export class OrganizationPermissionDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @Type(() => GroupDto)
  @Expose()
  organizationGroups: GroupDto[];

  @Type(() => ProductFlatDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  products: ProductFlatDto[];
}
