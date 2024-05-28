import { Expose, instanceToPlain, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { OrganizationCreateRequestDto } from './organization-create-request.dto';
import { AddressPatchRequestDto } from '@mo/database-dto';

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
}
