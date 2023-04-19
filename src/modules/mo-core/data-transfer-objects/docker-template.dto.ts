import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProjectNamespaceServiceEnvVarDto } from '../../mo-project-dto';

export class DockerTemplateDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  version: string;

  @IsOptional()
  @IsString()
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  folder: string;

  @IsOptional()
  @IsString()
  @Expose()
  lastUpdate: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  @Expose()
  internalPort: number;

  @Type(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  expose: boolean;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceEnvVarDto)
  @Expose()
  envVars?: ProjectNamespaceServiceEnvVarDto[];
}
