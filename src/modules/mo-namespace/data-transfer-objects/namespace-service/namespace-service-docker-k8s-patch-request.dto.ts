import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { StripTags } from '../../../../utils';

export class NamespaceServiceDockerK8sPatchRequestDto {
  @StripTags()
  @Expose()
  namespaceId: string;

  @StripTags()
  @Expose()
  namespaceServiceId: string;

  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  gitRepository: string;

  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  gitBranch: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  dockerfileName: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  dockerContext: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  internalPort: number;
}
