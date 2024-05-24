import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app';
import { isArray, isString } from 'class-validator';
import { ProjectNamespaceServiceStatusDto } from '../project-namespace-service-status';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceContainerNameDto } from '../project-namespace-service-container';
import { ServiceControllerEnum } from '../../enums';
import { CpuDto, EphemeralStorageDto, MemoryDto, TrafficDto } from '../stats';
import { ProjectNamespaceDisplayNameDto } from '../project-namespace/project-namespace-display-name.dto';

export class ProjectNamespaceServiceOverviewItemDto extends BaseEntityDto {
  @Type(() => ProjectNamespaceDisplayNameDto)
  @Expose()
  namespace: ProjectNamespaceDisplayNameDto;

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

  @Type(() => CpuDto)
  @Expose()
  cpu: CpuDto;

  @Type(() => MemoryDto)
  @Expose()
  memory: MemoryDto;

  @Type(() => EphemeralStorageDto)
  @Expose()
  ephemeralStorage: EphemeralStorageDto;

  @Type(() => TrafficDto)
  @Expose()
  traffic: TrafficDto;

  @Type(() => ProjectNamespaceServiceAppDashboardDto)
  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;

  @Type(() => ProjectNamespaceServiceStatusDto)
  @Expose()
  status: ProjectNamespaceServiceStatusDto;
}
