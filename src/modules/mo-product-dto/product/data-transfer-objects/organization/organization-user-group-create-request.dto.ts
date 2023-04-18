import { Expose, Type } from 'class-transformer';
import { IdDto } from '@mo/core-dto';
import { IsNotEmpty } from 'class-validator';

export class OrganizationUserGroupCreateRequestDto {
  @IsNotEmpty()
  @Type(() => IdDto)
  @Expose()
  user: IdDto;

  @IsNotEmpty()
  @Type(() => IdDto)
  @Expose()
  group: IdDto;
}
