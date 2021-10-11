import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { FileDto } from '../../../mo-file/data-transfer-objects/file.dto';
import { NamespaceServiceEnvVarDto } from '../../../mo-namespace/data-transfer-objects/namespace-service';

export class ServiceCreateRequestDto {
  @Expose()
  @IsString()
  name: string;

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
  @IsNumber()
  internalPort: number;

  @Expose()
  @IsBoolean()
  expose: boolean

  @Expose()
  @ValidateNested()
  @Transform(({ value }) => value ?? [])
  envVars: NamespaceServiceEnvVarDto[];
}
