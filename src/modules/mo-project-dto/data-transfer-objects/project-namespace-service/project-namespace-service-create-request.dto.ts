import { Expose, Transform, Type } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import {
  isArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { GithubBranchDto, GithubRepositoryDto } from '../../../mo-git';
import { KeyVaultSecretDto } from '../key-vault';
import { StripTags } from '@mo/js-utils';
import { IdDto } from '@mo/core-dto';
import { ProjectNamespaceServiceCnameCreateRequestDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-cname/project-namespace-service-cname-create-request.dto';
import { ProjectNamespaceServiceEnvvarCreateRequestDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-envvar/project-namespace-service-envvar-create-request.dto';
import { ProjectNamespaceServiceKubernetesSettingsCreateRequestDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-kubernetes-settings/project-namespace-service-kubernetes-settings-create-request.dto';
import { ProjectNamespaceServicePortCreateRequestDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-port/project-namespace-service-port-create-request.dto';

import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';
import { ServiceTypeEnum } from '../../enums';

export class ProjectNamespaceServiceCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(ServiceTypeEnum)
  @Expose()
  type: ServiceTypeEnum;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @StripTags()
  @Expose()
  displayName: string;

  // @IsNotEmpty()
  // @IsString()
  // @MinLength(PROJECT_CONST.SERVICE.NAME.MIN)
  // @MaxLength(PROJECT_CONST.SERVICE.NAME.MAX)
  // @Matches(PROJECT_CONST.SERVICE.NAME.MATCHES, {
  //   message: '$property must conform to: a-z or 0-9 ;min 6, max 6 char'
  // })
  // @StripTags()
  // @Expose()
  // name: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  description: string;

  @IsOptional()
  @ValidateIf((obj: ProjectNamespaceServiceCreateRequestDto) => !obj.containerImage)
  @IsString()
  @Transform((params: TransformFnParams) => ProjectNamespaceServiceCreateRequestDto.gitRepoTransform(params))
  @StripTags()
  @Expose()
  gitRepository: string;

  @IsOptional()
  @ValidateIf((obj: ProjectNamespaceServiceCreateRequestDto) => !!obj.gitRepository)
  @IsString()
  @Transform((params: TransformFnParams) => ProjectNamespaceServiceCreateRequestDto.gitBranchTransform(params))
  @StripTags()
  @Expose()
  gitBranch: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImage: string;

  @IsOptional()
  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommand: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommandArgs: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value ?? 'Dockerfile')
  @StripTags()
  @Expose()
  dockerfileName: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value ?? '.')
  @StripTags()
  @Expose()
  dockerContext: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (value && isArray(value)) {
      return value.filter((item: ProjectNamespaceServiceCnameCreateRequestDto) => !!item.cName);
    }
    return [];
  })
  @Type(() => ProjectNamespaceServiceCnameCreateRequestDto)
  @ValidateNested()
  @Expose()
  cNames: ProjectNamespaceServiceCnameCreateRequestDto[];

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServicePortCreateRequestDto)
  @ValidateNested()
  @Expose()
  ports: ProjectNamespaceServicePortCreateRequestDto[];

  @IsNotEmpty()
  @Type(() => ProjectNamespaceServiceKubernetesSettingsCreateRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: ProjectNamespaceServiceKubernetesSettingsCreateRequestDto;

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceEnvvarCreateRequestDto)
  @ValidateNested()
  @Expose()
  envVars: ProjectNamespaceServiceEnvvarCreateRequestDto[];

  @IsOptional()
  @Type(() => IdDto)
  // @ValidateNested()
  @Expose()
  app: IdDto;

  @Type(() => IdDto)
  @Expose()
  stage: IdDto;

  public static gitBranchTransform(params: TransformFnParams): string {
    let value = params.value;
    if (value instanceof GithubBranchDto) {
      value = value.name;
    }
    return value && isString(value) ? value.trim() : value;
  }

  public static gitRepoTransform(params: TransformFnParams): string {
    let value = params.value;
    if (value instanceof GithubRepositoryDto) {
      value = value.clone_url;
    }
    return value && isString(value) ? value.trim() : value;
  }
}
