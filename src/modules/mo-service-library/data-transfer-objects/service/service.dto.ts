import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServiceEnvVarDto } from '../../../mo-namespace/data-transfer-objects/namespace-service';
import { FilePublicDto } from '../../../mo-file';

export class ServiceDto extends BaseEntityDto {
  @Expose()
  name: string;

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

  @Type(() => NamespaceServiceEnvVarDto)
  @Expose()
  envVars: NamespaceServiceEnvVarDto[];
}
