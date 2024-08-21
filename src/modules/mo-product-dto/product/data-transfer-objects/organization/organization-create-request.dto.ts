import { Expose, instanceToPlain, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { AddressCreateRequestDto } from '@mogenius/database-dto';

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
