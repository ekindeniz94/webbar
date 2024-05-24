import { Expose, Transform } from 'class-transformer';
import { isBoolean, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, isString, IsUUID } from 'class-validator';
import { MoUtils, StripTags } from '@mo/js-utils';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNamespaceServiceContainerGitSettingsPatchRequestDto extends BaseEntityDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;

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
  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
  @IsBoolean()
  @Expose()
  publicRepo: boolean;

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
