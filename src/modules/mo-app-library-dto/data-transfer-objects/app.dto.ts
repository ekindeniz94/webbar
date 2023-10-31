import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsOptional, isString, IsString } from 'class-validator';
import { AppTagDto } from './app-tag.dto';
import { AppLibraryStateEnum, AppLibraryTypeEnum } from '../enums';
import { AppPortDto } from './app-port.dto';
import {
  ProjectDisplayNameDto,
  ProjectNamespaceServiceEnvVarDto,
  ProjectNamespaceServiceKubernetesSettingsDto
} from '../../mo-project-dto';
import { BaseEntityDto } from '@mo/database-dto';
import { OrganizationNameDto } from '../../mo-product-dto';

export class AppDto extends BaseEntityDto {
  @IsOptional()
  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @IsOptional()
  @Type(() => ProjectDisplayNameDto)
  @Expose()
  project: ProjectDisplayNameDto;

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

  @Transform(({ value }) => (value && isString(value) ? value : 'https://docs.mogenius.com/'))
  @IsString()
  @Expose()
  documentationLink: string;

  @Expose()
  state: AppLibraryStateEnum;

  /************************************************************************************************************
   * type => DOCKER_TEMPLATE
   ************************************************************************************************************/
  @Expose()
  repositoryLink: string;

  @Expose()
  repositoryUser?: string;

  @Expose()
  repositoryPAT?: string;

  @Expose()
  setupCommands: string;

  /************************************************************************************************************
   * type => CONTAINER_IMAGE_TEMPLATE
   ************************************************************************************************************/
  @Expose()
  containerImage: string;

  @Expose()
  containerImageRepoSecret?: string;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;
  /************************************************************************************************************/

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
