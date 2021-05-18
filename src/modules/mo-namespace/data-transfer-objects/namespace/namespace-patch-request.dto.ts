import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class NamespacePatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MAX)
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  users: string[];
}
