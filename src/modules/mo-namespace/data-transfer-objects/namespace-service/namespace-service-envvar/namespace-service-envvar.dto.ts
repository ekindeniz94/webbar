import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceEnvVarTypeEnum2 } from '../../../enums';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { BaseEntityDto } from '../../../../mo-core/data-transfer-objects/base.entity.dto';
import { StripTags } from '@mo/js-utils';

export class NamespaceServiceEnvVarDto extends BaseEntityDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  // @Matches(PROJECT_CONST.SERVICE.ENVVAR_NAME.MATCHES)
  @Expose()
  name: string;

  // @IsNotEmpty()
  @IsString()
  // @Matches(PROJECT_CONST.SERVICE.ENVVAR_VALUE.MATCHES)
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
  @Expose()
  dependsOn?: string;

  @IsOptional()
  @IsString()
  @Expose()
  dependsOnMethod?: string;
}
