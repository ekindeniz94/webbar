import { Expose, Transform } from 'class-transformer';
import { NamespaceServiceEnvVarTypeEnum } from '../../enums';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class NamespaceServiceEnvVarDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  value: string;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceEnvVarTypeEnum)
  @Expose()
  type: NamespaceServiceEnvVarTypeEnum;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === undefined ? true : value))
  @Expose()
  deactivateName: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === undefined ? false : value))
  @Expose()
  deactivateValue: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  @Transform(({ value }) => (value === undefined ? true : value))
  deactivateType: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  @Transform(({ value }) => (value === undefined ? true : value))
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
