import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app/project-namespace-service-app-dashboard.dto';
import { ProjectNamespaceServiceStatusResourceDto } from '../project-namespace-service-status';
import { ProjectNamespaceServiceContainerNameDto } from '../project-namespace-service-container';
import { isArray } from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNamespaceServiceDashboardDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Type(() => ProjectNamespaceServiceContainerNameDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: ProjectNamespaceServiceContainerNameDto[];

  @Type(() => ProjectNamespaceServiceStatusResourceDto)
  @Expose()
  status: ProjectNamespaceServiceStatusResourceDto;

  @Type(() => ProjectNamespaceServiceAppDashboardDto)
  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;
}
