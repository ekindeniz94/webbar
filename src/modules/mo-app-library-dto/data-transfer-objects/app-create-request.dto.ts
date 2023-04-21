import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { isArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, isString, IsString, ValidateNested } from 'class-validator';
import { AppTagDto } from './app-tag.dto';
import { AppLibraryStateEnum, AppLibraryTypeEnum } from '../enums';
import { AppPortCreateRequestDto } from './app-port-create-request.dto';
import { AppEnvVarCreateRequestDto } from './app-envvar-create-request.dto';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../../mo-project-dto';

export class AppCreateRequestDto {
  @IsOptional()
  @Type(() => AppTagDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  tags: AppTagDto[];

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsEnum(AppLibraryTypeEnum)
  @Expose()
  type: AppLibraryTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  descriptionShort: string;

  @Transform(({ value }) => (value && isString(value) ? value : '1.0'))
  @IsNotEmpty()
  @IsString()
  @Expose()
  version: string;

  @IsOptional()
  @IsString()
  @Expose()
  icon: string;

  @IsOptional()
  @IsString()
  @Expose()
  image: string;

  @Transform(({ value }) => (value && isString(value) ? value : '#000000'))
  @IsNotEmpty()
  @IsString()
  @Expose()
  color: string;

  @Transform(({ value }) => (value && isString(value) ? value : 'https://docs.mogenius.com/'))
  @IsNotEmpty()
  @IsString()
  @Expose()
  documentationLink: string;

  @Transform(({ value }) => (value ? value : AppLibraryStateEnum.UNAVAILABLE))
  @IsNotEmpty()
  @IsEnum(AppLibraryStateEnum)
  @Expose()
  state: AppLibraryStateEnum;

  @IsOptional()
  @IsString()
  @Expose()
  repositoryLink: string;

  @IsOptional()
  @IsString()
  @Expose()
  setupCommands: string;

  @IsOptional()
  @IsString()
  @Expose()
  containerImage: string;

  @IsOptional()
  @IsString()
  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;

  @Type(() => AppPortCreateRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  ports: AppPortCreateRequestDto[];

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Transform(({ value }) => value ?? plainToInstance(ProjectNamespaceServiceKubernetesSettingsDto, {}))
  @ValidateNested()
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;

  @Type(() => AppEnvVarCreateRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  envVars: AppEnvVarCreateRequestDto[];
}
