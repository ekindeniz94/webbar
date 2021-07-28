import { Expose, Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  isArray,
  isBoolean,
  IsBoolean,
  IsEnum,
  IsFQDN,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import _ from 'lodash';
import { DTO_VALIDATION_CONST, GitBranchRefItemDto } from '../../../mo-core';
import { NamespaceServiceTypeEnum } from '../../enums';
import { NamespaceServiceEnvVarDto } from './namespace-service-envvar.dto';
import { NamespaceServiceGroupCreateRequestDto } from './namespace-service-group-create-request.dto';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from './namespace-service-kubernetes-settings-create-request.dto';
import { TransformFnParams } from 'class-transformer/types/interfaces';

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

  @IsNotEmpty()
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

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MIN)
  @Transform((params: TransformFnParams) => NamespaceServiceCreateRequestDto.gitBranchTransform(params))
  @Expose()
  gitBranch: string;

  @IsNotEmpty()
  @Type(() => NamespaceServiceKubernetesSettingsCreateRequestDto)
  @ValidateNested()
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
  @ValidateNested()
  @Expose()
  serviceGroup: NamespaceServiceGroupCreateRequestDto;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  internalPort: number;

  @IsOptional()
  @Type(() => NamespaceServiceEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  envVars: NamespaceServiceEnvVarDto[];

  @IsBoolean()
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;

  protected static gitBranchTransform(params: TransformFnParams): string {
    let value = params.value;
    if (value instanceof GitBranchRefItemDto) {
      value = value.ref;
    }
    return (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MAX
    );
  }
}
