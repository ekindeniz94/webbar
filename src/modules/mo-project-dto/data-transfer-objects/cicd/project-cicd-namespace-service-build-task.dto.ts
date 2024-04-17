import { Expose, Transform, Type } from 'class-transformer';
import { isNumberString } from 'class-validator';

export class ProjectCiCdNamespaceServiceBuildTaskDto {
  @Expose()
  projectId: string;

  @Expose()
  namespace: string;

  @Expose()
  controller: string;

  @Expose()
  container: string;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  buildId: number;

  @Expose()
  buildTask: string;

  @Expose()
  buildTaskState: 'FAILED' | 'SUCCEEDED' | 'STARTED' | 'PENDING';
}
