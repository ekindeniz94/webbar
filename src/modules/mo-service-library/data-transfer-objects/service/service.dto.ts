import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { FileDto } from '../../../mo-file/data-transfer-objects/file.dto';
import { NamespaceServiceEnvVarDto } from '../../../mo-namespace/data-transfer-objects/namespace-service';

export class ServiceDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  description: string;
  
  @Expose()
  descriptionShort: string;

  @Expose()
  version: string;

  @Expose()
  icon: FileDto;

  @Expose()
  image: FileDto;

  @Expose()
  folder: string;

  @Expose()
  internalPort: number;

  @Expose()
  expose: boolean

  @Expose()
  envVars: NamespaceServiceEnvVarDto[];
}
