import { Expose, Transform, Type } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import {
  isArray,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceStageIdDto } from '../namespace-stage';
import { NamespaceServiceEnvVarCreateRequestDto } from './namespace-service-envvar/namespace-service-envvar-create-request.dto';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from './namespace-service-kubernetes-settings/namespace-service-kubernetes-settings-create-request.dto';
import { GithubBranchDto, GithubRepositoryDto } from '../../../mo-git';
import { NamespaceServiceCnameCreateRequestDto } from './namespace-service-cname/namespace-service-cname-create-request.dto';
import { NamespaceServicePortCreateRequestDto } from './namespace-service-port/namespace-service-port-create-request.dto';
import { StripTags } from '../../../../utils';
import { AppIdDto } from '../../../mo-app-library';
import { KeyVaultSecretDto } from '../key-vault';

export class NamespaceServiceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DISPLAY_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DISPLAY_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DISPLAY_NAME.MAX
    )
  )
  @StripTags()
  @Expose()
  displayName: string;

  // @IsNotEmpty()
  // @IsString()
  // @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MIN)
  // @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MAX)
  // @Matches(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MATCHES, {
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
  @ValidateIf((obj: NamespaceServiceCreateRequestDto) => !obj.containerImage)
  @IsString()
  @Transform((params: TransformFnParams) => NamespaceServiceCreateRequestDto.gitRepoTransform(params))
  @StripTags()
  @Expose()
  gitRepository: string;

  @IsOptional()
  @ValidateIf((obj: NamespaceServiceCreateRequestDto) => !!obj.gitRepository)
  @IsString()
  @Transform((params: TransformFnParams) => NamespaceServiceCreateRequestDto.gitBranchTransform(params))
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
      return value.filter((item: NamespaceServiceCnameCreateRequestDto) => !!item.cName);
    }
    return [];
  })
  @Type(() => NamespaceServiceCnameCreateRequestDto)
  @ValidateNested()
  @Expose()
  cNames: NamespaceServiceCnameCreateRequestDto[];

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceServicePortCreateRequestDto)
  @ValidateNested()
  @Expose()
  ports: NamespaceServicePortCreateRequestDto[];

  @IsNotEmpty()
  @Type(() => NamespaceServiceKubernetesSettingsCreateRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsCreateRequestDto;

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceServiceEnvVarCreateRequestDto)
  @ValidateNested()
  @Expose()
  envVars: NamespaceServiceEnvVarCreateRequestDto[];

  @IsNotEmpty()
  @Type(() => AppIdDto)
  // @ValidateNested()
  @Expose()
  app: AppIdDto;

  @Type(() => NamespaceStageIdDto)
  @Expose()
  stage: NamespaceStageIdDto;

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
