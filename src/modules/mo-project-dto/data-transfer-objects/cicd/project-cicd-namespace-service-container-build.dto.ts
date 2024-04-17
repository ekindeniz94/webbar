import { Expose, Transform } from 'class-transformer';
import { BuildStateEnum } from '../../../mo-product-dto';
import moment from 'moment';
import { ProjectCiCdNamespaceServiceBuildTaskDto } from './project-cicd-namespace-service-build-task.dto';

export class ProjectCiCdNamespaceServiceContainerBuildDto {
  @Expose()
  buildId: string;

  @Expose()
  buildState: BuildStateEnum;

  @Expose()
  commitAuthor: string;

  @Expose()
  commitMessage: string;

  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Expose()
  commitHash: string;

  @Expose()
  commitLink: string;

  @Expose()
  durationMs: number;

  @Expose()
  tasks: ProjectCiCdNamespaceServiceBuildTaskDto[] | null;
}
