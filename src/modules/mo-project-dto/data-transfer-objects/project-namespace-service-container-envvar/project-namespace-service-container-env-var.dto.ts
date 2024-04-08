import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { StripTags } from '@mo/js-utils';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../enums';

export class ProjectNamespaceServiceContainerEnvVarDto extends BaseEntityDto {
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
  @IsEnum(ProjectNamespaceServiceEnvVarTypeEnum)
  @Expose()
  type: ProjectNamespaceServiceEnvVarTypeEnum;

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

  // @IsOptional()
  // @IsString()
  // @Expose()
  // dependsOn?: string;
  //
  // @IsOptional()
  // @IsString()
  // @Expose()
  // dependsOnMethod?: string;
}
