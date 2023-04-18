import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../../mo-core/constantes/data-length.const';
import { NamespaceServiceEnvVarTypeEnum2 } from '../../../enums';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../../../mo-project-dto';

export class NamespaceServiceEnvVarCreateRequestDto {
  // @IsString()
  // @Transform(
  //   ({ value, obj }) => {
  //     if (value) {
  //       return value;
  //     }
  //     obj.id = MoUtils.nanoid();
  //     return obj.id;
  //   },
  //   { toClassOnly: true }
  // )
  // @Expose()
  // id: string;

  @IsNotEmpty()
  @IsString()
  // @Matches(PROJECT_CONST.SERVICE.ENVVAR_NAME.MATCHES)
  @MaxLength(PROJECT_CONST.SERVICE.ENVVAR_NAME.MAX)
  @MinLength(PROJECT_CONST.SERVICE.ENVVAR_NAME.MIN)
  @StripTags()
  @Expose()
  name: string;

  @IsString()
  // @Matches(PROJECT_CONST.SERVICE.ENVVAR_VALUE.MATCHES)
  @MaxLength(PROJECT_CONST.SERVICE.ENVVAR_VALUE.MAX)
  @MinLength(PROJECT_CONST.SERVICE.ENVVAR_VALUE.MIN)
  // @StripTags()
  @Expose()
  value: string;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceEnvVarTypeEnum2)
  @Expose()
  type: NamespaceServiceEnvVarTypeEnum2;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === undefined ? false : value))
  @Expose()
  deactivateName: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === undefined ? false : value))
  @Expose()
  deactivateValue: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  @Transform(({ value }) => (value === undefined ? false : value))
  deactivateType: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  @Transform(({ value }) => (value === undefined ? false : value))
  deactivateDelete: boolean;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  dependsOn?: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  dependsOnMethod?: string;
}
