import { Expose, Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty, isString, IsString, MaxLength, MinLength
} from 'class-validator';
import { MoUtils } from '../../../../utils';
import { DTO_VALIDATION_CONST } from '../../../mo-core/constantes/data-length.const';
import { NamespaceServiceEnvVarTypeEnum } from '../../enums';

export class NamespaceServiceEnvVarDtoCreateRequestDto {
  @IsString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.id = MoUtils.nanoid();
      return obj.id;
    },
    { toClassOnly: true }
  )
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

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.ENVVAR_NAME.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.ENVVAR_NAME.MIN)
  @Expose()
  name: string;

  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.ENVVAR_VALUE.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.ENVVAR_VALUE.MIN)
  @Expose()
  value: string;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceEnvVarTypeEnum)
  @Expose()
  type: NamespaceServiceEnvVarTypeEnum;
}
