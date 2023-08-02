import { Expose, Transform } from 'class-transformer';
import { isArray } from 'class-validator';

export class ProjectCiCdNamespaceServiceBuildLogDto {
  @Expose()
  name: string;

  @Expose()
  count: number;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  value: string[];
}
