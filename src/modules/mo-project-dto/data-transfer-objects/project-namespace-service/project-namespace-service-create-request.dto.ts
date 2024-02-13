import { Expose, Transform, Type } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf
} from 'class-validator';
import { GithubBranchDto, GithubRepositoryDto } from '../../../mo-git';
import { KeyVaultSecretDto } from '../key-vault';
import { StripTags } from '@mo/js-utils';
import { IdDto } from '@mo/core-dto';

import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';
import { ServiceTypeEnum } from '../../enums';

export class ProjectNamespaceServiceCreateRequestDto {
  @Type(() => IdDto)
  @Expose()
  projectNamespace: IdDto;

  @IsNotEmpty()
  @IsEnum(ServiceTypeEnum)
  @Expose()
  type: ServiceTypeEnum;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  @Transform(
    ({ value }) =>
      (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @StripTags()
  @Expose()
  displayName: string;

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
  @IsNumber()
  @StripTags()
  @Expose()
  pipelineId: number;

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
  @Type(() => IdDto)
  // @ValidateNested()
  @Expose()
  app: IdDto;

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
