import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app/project-namespace-service-app-dashboard.dto';
import { ProjectNamespaceServiceContainerNameDto } from '../project-namespace-service-container';
import { isArray, isString } from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';
import { ServiceControllerEnum } from '../../enums';

export class ProjectNamespaceServiceDashboardDto extends BaseEntityDto {
  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Expose()
  description: string;

  @Type(() => ProjectNamespaceServiceContainerNameDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: ProjectNamespaceServiceContainerNameDto[];

  @Type(() => ProjectNamespaceServiceAppDashboardDto)
  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;
}
