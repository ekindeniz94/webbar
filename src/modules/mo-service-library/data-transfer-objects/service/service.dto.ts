import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { FilePublicDto } from '../../../mo-file';
import { NamespaceServiceEnvVarDto } from '../../../mo-namespace/data-transfer-objects/namespace-service';
import { ServiceTypeEnum } from '../../enums';
import { ServicePortDto } from './service-port.dto';
import { isArray } from 'class-validator';

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
  setupCommands: string;

  // TODO remove
  @Expose()
  internalPort: number;

  // TODO remove
  @Type(() => Boolean)
  @Expose()
  expose: boolean;

  @Type(() => ServicePortDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: ServicePortDto[];

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
