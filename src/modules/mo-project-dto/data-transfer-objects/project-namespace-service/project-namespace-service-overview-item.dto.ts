import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app';
import { ProjectNamespaceServiceStateEnum, ServiceTypeEnum } from '../../enums';
import moment from 'moment/moment';
import { isArray, isBoolean } from 'class-validator';
import { CpuDto, EphemeralStorageDto, MemoryDto } from '../stats';
import { ProjectNamespaceServiceStatusResourceItemDto } from '../project-namespace-service-status';

export class ProjectNamespaceServiceOverviewItemDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  type: ServiceTypeEnum; // Enum

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  lastPodCreatedAt: Date;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @Expose()
  podCount: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean; // Enum ON/OFF;

  // @todo: remove
  @Expose()
  state: ProjectNamespaceServiceStateEnum; // Enum ERROR/BUILDING...

  @Expose()
  runningSince: Date;

  @Type(() => CpuDto)
  @Expose()
  cpu: CpuDto;

  @Type(() => MemoryDto)
  @Expose()
  memory: MemoryDto;

  @Type(() => EphemeralStorageDto)
  @Expose()
  ephemeralStorage: EphemeralStorageDto;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @Expose()
  trafficInBytes: number;

  @Type(() => ProjectNamespaceServiceAppDashboardDto)
  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;

  @Type(() => ProjectNamespaceServiceStatusResourceItemDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  status: ProjectNamespaceServiceStatusResourceItemDto[];
}
