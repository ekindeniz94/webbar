import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isString, IsString } from 'class-validator';
import { AppTagDto } from './app-tag.dto';
import { AppLibraryStateEnum, AppLibraryTypeEnum } from '../enums';
import { AppPortDto } from './app-port.dto';
import { ProjectNamespaceServiceEnvVarDto, ProjectNamespaceServiceKubernetesSettingsDto } from '../../mo-project-dto';
import { BaseEntityDto } from '@mo/database-dto';

export class AppDto extends BaseEntityDto {
  @Type(() => AppTagDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  tags: AppTagDto[];

  @Expose()
  name: string;

  @Expose()
  type: AppLibraryTypeEnum;

  @Expose()
  description: string;

  @Expose()
  descriptionShort: string;

  @Expose()
  version: string;

  @Expose()
  icon: string;

  @Expose()
  image: string;

  @Expose()
  color: string;

  @Transform(({ value }) => (value && isString(value) ? value : 'https://docs.mogenius.com/'))
  @IsString()
  @Expose()
  documentationLink: string;

  @Expose()
  state: AppLibraryStateEnum;

  @Expose()
  repositoryLink: string;

  @Expose()
  setupCommands: string;

  @Expose()
  containerImage: string;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;

  @Type(() => AppPortDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: AppPortDto[];

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;

  @Type(() => ProjectNamespaceServiceEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: ProjectNamespaceServiceEnvVarDto[];
}
