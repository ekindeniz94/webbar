import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { FileDto } from '../../../mo-file/data-transfer-objects/file.dto';
import { NamespaceServiceEnvVarCreateRequestDto } from '../../../mo-namespace/data-transfer-objects/namespace-service';
import { ServiceTypeEnum } from '../../enums';

export class ServiceCreateRequestDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsEnum(ServiceTypeEnum)
  serviceType: ServiceTypeEnum;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsString()
  descriptionShort: string;

  @Expose()
  @IsString()
  version: string;

  @Type(() => FileDto)
  @Expose()
  icon: FileDto;

  @Type(() => FileDto)
  @Expose()
  image: FileDto;

  @Expose()
  @IsOptional()
  @IsString()
  folder: string;

  @Expose()
  @IsOptional()
  @IsString()
  setupCommands: string;

  @Expose()
  @IsNumber()
  internalPort: number;

  @Type(() => Boolean)
  @Expose()
  @IsBoolean()
  expose: boolean;

  @Expose()
  @Transform(({ value }) => value ?? 0.1)
  @IsNumber()
  kubernetesMinCores: number;

  @Expose()
  @Transform(({ value }) => value ?? 16)
  @IsNumber()
  kubernetesMinRamMb: number;

  @Expose()
  @Transform(({ value }) => value ?? 10)
  @IsNumber()
  kubernetesMinTempStorageMb: number;

  @Expose()
  @ValidateNested()
  @Transform(({ value }) => value ?? [])
  envVars: NamespaceServiceEnvVarCreateRequestDto[];
}
