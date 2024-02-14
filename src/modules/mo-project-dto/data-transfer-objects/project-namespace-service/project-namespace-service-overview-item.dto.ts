import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app';
import { isArray } from 'class-validator';
import { ProjectNamespaceServiceStatusResourceDto } from '../project-namespace-service-status';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceContainerNameDto } from '../project-namespace-service-container';

export class ProjectNamespaceServiceOverviewItemDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Type(() => ProjectNamespaceServiceContainerNameDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: ProjectNamespaceServiceContainerNameDto[];

  @Type(() => ProjectNamespaceServiceAppDashboardDto)
  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;

  @Type(() => ProjectNamespaceServiceStatusResourceDto)
  @Expose()
  status: ProjectNamespaceServiceStatusResourceDto;
}
