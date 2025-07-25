import { Expose, Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, isString } from 'class-validator';
import { StripTags } from '@mogenius/js-utils';

export class ProjectNamespaceServiceContainerGitSettingsCreateRequestDto {
  @IsOptional()
  @Transform(({ value }) => !!value)
  @IsBoolean()
  @Expose()
  publicRepo: boolean;

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
  @IsNumber()
  @StripTags()
  @Expose()
  pipelineId: number;

  @Transform(({ value }) => (isString(value) ? value : 'Dockerfile'))
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  dockerfileName: string;

  @Transform(({ value }) => (isString(value) ? value : '.'))
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  dockerContext: string;
}
