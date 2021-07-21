import { Expose, Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  isArray,
  IsBoolean,
  IsEnum,
  IsFQDN,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import _ from 'lodash';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceTypeEnum } from '../../enums';
import { NamespaceServiceEnvVarDto } from './namespace-service-envvar.dto';
import { NamespaceServiceGroupCreateRequestDto } from './namespace-service-group-create-request.dto';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from './namespace-service-kubernetes-settings-create-request.dto';

export class NamespaceServiceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MAX)
  )
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DESCRIPTION.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DESCRIPTION.MAX
    )
  )
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceTypeEnum)
  @Transform(({ value }) => value ?? NamespaceServiceTypeEnum.DOCKER)
  @Expose()
  serviceType: NamespaceServiceTypeEnum;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX
    )
  )
  @Expose()
  gitRepository: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MAX
    )
  )
  @Expose()
  gitBranch: string;

  @IsNotEmpty()
  @Type(() => NamespaceServiceKubernetesSettingsCreateRequestDto)
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsCreateRequestDto;

  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.NAMESPACE.CNAME.MAX_ENTRIES)
  @IsFQDN({}, { each: true })
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.CNAME.MAX_LENGTH, {
    each: true
  })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  @Expose()
  cNames: string[];

  @IsOptional()
  @Type(() => NamespaceServiceGroupCreateRequestDto)
  @Expose()
  serviceGroup: NamespaceServiceGroupCreateRequestDto;

  @IsOptional()
  @IsNumber()
  @Expose()
  internalPort: number;

  @Type(() => NamespaceServiceEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: NamespaceServiceEnvVarDto[];

  @IsBoolean()
  @Expose()
  expose: boolean;
}
