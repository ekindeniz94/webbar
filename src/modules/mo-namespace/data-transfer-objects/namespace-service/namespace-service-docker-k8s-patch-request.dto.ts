import {Expose, Transform, Type} from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, isString, IsString, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class NamespaceServiceDockerK8sPatchRequestDto {
  @Expose()
  namespaceId: string;

  @Expose()
  namespaceServiceId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  gitRepository: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  gitBranch: string;

  @IsOptional()
  @IsString()
  @Expose()
  dockerfileName: string;

  @IsOptional()
  @IsString()
  @Expose()
  dockerContext: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  internalPort: number;
}
