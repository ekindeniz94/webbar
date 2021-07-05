import { DockerTemplateDto } from './docker-template.dto';
import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';

export class ConfigDto {
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  domains: string[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => DockerTemplateDto)
  @Expose()
  dockerTemplateProjects: DockerTemplateDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  greekLetters: string[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  interests: string[];
}
