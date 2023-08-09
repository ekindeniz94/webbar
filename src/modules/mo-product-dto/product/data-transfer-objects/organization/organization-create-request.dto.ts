import { Expose, instanceToPlain, Transform, Type } from 'class-transformer';
import { ArrayNotEmpty, isArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { AddressCreateRequestDto } from '@mo/database-dto';
import { IdDto } from '@mo/core-dto';
import { OrganizationUserGroupCreateRequestDto } from './organization-user-group-create-request.dto';

export class OrganizationCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @Expose()
  vatNumber: string;

  @IsOptional()
  @Type(() => AddressCreateRequestDto)
  @ValidateNested()
  @Transform(({ value }) => {
    let isEmpty = false;
    try {
      isEmpty = JSON.stringify(instanceToPlain(value)) === JSON.stringify({});
    } catch (e) {}
    return isEmpty ? undefined : value;
  })
  @Expose()
  address: AddressCreateRequestDto;

  // @IsOptional()
  // @Type(() => OrganizationUserGroupCreateRequestDto)
  // @ValidateNested()
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // organizationUserGroups: OrganizationUserGroupCreateRequestDto[];
}
