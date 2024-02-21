import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app';
import { isArray, isString } from 'class-validator';
import { ProjectNamespaceServiceStatusResourceDto } from '../project-namespace-service-status';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceContainerNameDto } from '../project-namespace-service-container';
import { ServiceControllerEnum } from '../../enums';

export class ProjectNamespaceServiceOverviewItemDto extends BaseEntityDto {
  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

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

  @Type(() => ProjectNamespaceServiceStatusResourceDto)
  @Expose()
  status: ProjectNamespaceServiceStatusResourceDto;
}
