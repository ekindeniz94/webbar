import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class NamespaceDto extends BaseEntityDto {
  @Exclude()
  createdBy: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MAX)
  @Expose()
  name: string;

  @Expose()
  lastName: string;
}
