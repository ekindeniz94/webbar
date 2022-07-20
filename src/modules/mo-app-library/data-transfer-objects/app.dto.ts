import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isString, IsString } from 'class-validator';
import { BaseEntityDto } from '../../mo-core';
import { AppTagDto } from './app-tag.dto';
import { AppLibraryStateEnum, AppLibraryTypeEnum } from '../enums';
import { FilePublicDto } from '../../mo-file';
import { NamespaceServiceEnvVarDto } from '../../mo-namespace';
import { AppPortDto } from './app-port.dto';

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

  @Type(() => FilePublicDto)
  @Expose()
  icon: FilePublicDto;

  @Type(() => FilePublicDto)
  @Expose()
  image: FilePublicDto;

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

  @Type(() => AppPortDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: AppPortDto[];

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0.1)
  @Expose()
  kubernetesMinCores: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 16)
  @Expose()
  kubernetesMinRamMb: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 10)
  @Expose()
  kubernetesMinTempStorageMb: number;

  @Type(() => NamespaceServiceEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: NamespaceServiceEnvVarDto[];
}
