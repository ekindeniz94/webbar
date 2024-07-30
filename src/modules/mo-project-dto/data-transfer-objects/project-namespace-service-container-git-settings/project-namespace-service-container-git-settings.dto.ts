import { Expose, Transform } from 'class-transformer';
import { isString } from 'class-validator';
import { BaseEntityDto } from '@mogenius/database-dto';

export class ProjectNamespaceServiceContainerGitSettingsDto extends BaseEntityDto {
  @Transform(({ value }) => !!value)
  @Expose()
  publicRepo: boolean;

  @Transform(({ value }) => (isString(value) ? value : null))
  @Expose()
  gitRepository: string;

  @Transform(({ value }) => (isString(value) ? value : null))
  @Expose()
  gitBranch: string;

  @Expose()
  pipelineId: number;

  @Transform(({ value }) => (isString(value) ? value : 'Dockerfile'))
  @Expose()
  dockerfileName: string;

  @Transform(({ value }) => (isString(value) ? value : '.'))
  @Expose()
  dockerContext: string;
}
