import { Expose, instanceToPlain, Transform, Type } from 'class-transformer';
import { ArrayNotEmpty, isArray, IsString, ValidateNested } from 'class-validator';
import { AddressCreateRequestDto } from '@mo/database-dto';
import { IdDto } from '@mo/core-dto';
import { OrganizationUserGroupCreateRequestDto } from './organization-user-group-create-request.dto';

export class OrganizationCreateRequestDto {
  @Type(() => IdDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  clusters: IdDto[];

  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  vatNumber: string;

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

  // @ArrayNotEmpty()
  @Type(() => OrganizationUserGroupCreateRequestDto)
  @ValidateNested()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  organizationUserGroups: OrganizationUserGroupCreateRequestDto[];
}
