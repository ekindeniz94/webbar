import { Expose, Transform, Type } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import {
  ArrayMaxSize,
  isArray,
  isBoolean,
  IsBoolean,
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
import { ServiceDto, ServiceTypeEnum } from '../../../mo-service-library';
import { NamespaceStageDto } from '../namespace-stage';
import { NamespaceServiceEnvVarCreateRequestDto } from './namespace-service-envvar-create-request.dto';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from './namespace-service-kubernetes-settings-create-request.dto';
import { GithubBranchDto, GithubRepositoryDto } from '../../../mo-git';

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
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX)
  @Transform((params: TransformFnParams) => NamespaceServiceCreateRequestDto.gitRepoTransform(params))
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
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.HTML.DOCUMENT_ROOT.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.HTML.DOCUMENT_ROOT.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.HTML.DOCUMENT_ROOT.MAX
    )
  )
  @Expose()
  dockerfileName: string;

  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.NAMESPACE.CNAME.MAX_ENTRIES)
  @IsFQDN({}, { each: true })
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.CNAME.MAX_LENGTH, {
    each: true
  })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  @Expose()
  cNames: string[];

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  internalPort: number;

  @IsBoolean()
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;

  @IsNotEmpty()
  @Type(() => NamespaceServiceKubernetesSettingsCreateRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsCreateRequestDto;

  @IsOptional()
  @Type(() => NamespaceServiceEnvVarCreateRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  envVars: NamespaceServiceEnvVarCreateRequestDto[];

  @IsNotEmpty()
  @Type(() => ServiceDto)
  @ValidateNested()
  @Expose()
  service: ServiceDto;

  @Type(() => NamespaceStageDto)
  @Expose()
  stage: NamespaceStageDto;

  get serviceType(): ServiceTypeEnum {
    return this.service.serviceType;
  }

  public static gitBranchTransform(params: TransformFnParams): string {
    let value = params.value;
    if (value instanceof GithubBranchDto) {
      value = value.name;
    }
    return (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MAX
    );
  }

  public static gitRepoTransform(params: TransformFnParams): string {
    let value = params.value;
    if (value instanceof GithubRepositoryDto) {
      value = value.clone_url;
    }
    return (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MAX
    );
  }
}
