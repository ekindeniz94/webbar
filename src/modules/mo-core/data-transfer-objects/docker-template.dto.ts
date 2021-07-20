import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { NamespaceServiceEnvVarDto } from '../../mo-namespace/data-transfer-objects/namespace-service/namespace-service-envvar.dto';

export class DockerTemplateDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  version: string;

  @Expose()
  description: string;

  @Expose()
  folder: string;

  @Expose()
  lastUpdate: string;

  @IsOptional()
  @Expose()
  internalPort: number;

  @IsBoolean()
  @Expose()
  expose: boolean;

  @IsOptional()
  @Type(() => NamespaceServiceEnvVarDto)
  @Expose()
  envVars?: NamespaceServiceEnvVarDto[];
}
