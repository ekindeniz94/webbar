import { Expose, instanceToPlain, Transform, Type } from 'class-transformer';
import { ArrayNotEmpty, isArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { OrganizationCreateRequestDto } from './organization-create-request.dto';
import { AddressPatchRequestDto } from '@mo/database-dto';
import { OrganizationUserGroupPatchRequestDto } from './organization-user-group-patch-request.dto';

export class OrganizationPatchRequestDto extends OrganizationCreateRequestDto {
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

  @ArrayNotEmpty()
  @Type(() => OrganizationUserGroupPatchRequestDto)
  @ValidateNested()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  organizationUserGroups: OrganizationUserGroupPatchRequestDto[];
}
