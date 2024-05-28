import { Expose, instanceToPlain, Transform, Type } from 'class-transformer';
import { isArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { OrganizationCreateRequestDto } from './organization-create-request.dto';
import { AddressPatchRequestDto } from '@mo/database-dto';
import { OrganizationUserGroupPatchRequestDto } from './organization-user-group-patch-request.dto';
import { IdDto } from '@mo/core-dto';

export class OrganizationAdminPatchRequestDto extends OrganizationCreateRequestDto {
  @Type(() => IdDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  clusters: IdDto[];

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => AddressPatchRequestDto)
  @ValidateNested()
  @Transform(({ value }) => {
    let isEmpty = false;
    try {
      isEmpty = JSON.stringify(instanceToPlain(value)) === JSON.stringify({});
    } catch (e) {}
    return isEmpty ? undefined : value;
  })
  @Expose()
  address: AddressPatchRequestDto;

  // @ArrayNotEmpty()
  @Type(() => OrganizationUserGroupPatchRequestDto)
  @ValidateNested()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  organizationUserGroups: OrganizationUserGroupPatchRequestDto[];
}
