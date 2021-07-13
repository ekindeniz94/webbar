import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
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

  @Expose()
  @IsOptional()
  exposedPort: number;

  @Expose()
  @IsOptional()
  envVars?: NamespaceServiceEnvVarDto[];

  @Expose()
  @IsOptional()
  diskSizeInMB?: number;
}
