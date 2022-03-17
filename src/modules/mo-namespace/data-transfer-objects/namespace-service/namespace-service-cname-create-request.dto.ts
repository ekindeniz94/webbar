import { Expose, Type } from 'class-transformer';
import { IsFQDN, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';

export class NamespaceServiceCnameCreateRequestDto extends BaseEntityDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Expose()
  internalPort: number;

  @IsNotEmpty()
  @IsFQDN({})
  @Expose()
  cName: string;
}
