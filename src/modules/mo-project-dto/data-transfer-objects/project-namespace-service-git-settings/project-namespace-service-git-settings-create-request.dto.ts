import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, isString } from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';
import { StripTags } from '@mo/js-utils';

export class ProjectNamespaceServiceGitSettingsCreateRequestDto extends BaseEntityDto {
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
