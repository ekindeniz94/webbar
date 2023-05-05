import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceDashboardDto } from '../project-namespace-service/project-namespace-service-dashboard.dto';
import { isArray } from 'class-validator';

export class ProjectNamespaceDashboardResponseDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  updatedAt: Date;

  @Type(() => ProjectNamespaceServiceDashboardDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  services: ProjectNamespaceServiceDashboardDto[];
}
