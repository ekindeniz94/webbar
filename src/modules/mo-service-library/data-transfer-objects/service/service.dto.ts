import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { FilePublicDto } from '../../../mo-file';
import { NamespaceServiceEnvVarDto } from '../../../mo-namespace/data-transfer-objects/namespace-service';
import { ServiceTypeEnum } from '../../enums';

export class ServiceDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  serviceType: ServiceTypeEnum;

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
  folder: string;

  @Expose()
  internalPort: number;

  @Expose()
  expose: boolean;

  @Expose()
  kubernetesMinCores: number;

  @Expose()
  kubernetesMinRamMb: number;

  @Expose()
  kubernetesMinTempStorageMb: number;

  @Type(() => NamespaceServiceEnvVarDto)
  @Expose()
  envVars: NamespaceServiceEnvVarDto[];
}
