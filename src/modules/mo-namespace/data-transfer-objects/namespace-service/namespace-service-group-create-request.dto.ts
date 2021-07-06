import { Expose, Transform } from 'class-transformer';
import {
  IsNotEmpty, isString, IsString, MaxLength, MinLength
} from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core/constantes/data-length.const';

export class NamespaceServiceGroupCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GROUPNAME.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GROUPNAME.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GROUPNAME.MAX
    )
  )
  @Expose()
  name: string;
}
