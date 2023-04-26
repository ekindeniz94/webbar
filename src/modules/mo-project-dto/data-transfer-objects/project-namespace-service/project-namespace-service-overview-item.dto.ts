import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app';
import { ProjectNamespaceServiceStateEnum, ServiceTypeEnum } from '../../enums';
import moment from 'moment/moment';

export class ProjectNamespaceServiceOverviewItemDto {
  @Expose()
  id: string;

  @Expose()
  type: ServiceTypeEnum; // Enum

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Expose()
  runningInstanceCount: number;

  @Expose()
  switchedOn: boolean; // Enum ON/OFF;

  @Expose()
  state: ProjectNamespaceServiceStateEnum; // Enum ERROR/BUILDING...

  @Expose()
  runningSince: Date;

  @Expose()
  cpuUsagePercentage: number;

  @Expose()
  ramUsagePercentage: number;

  @Expose()
  storageUsageBytes: number;

  @Expose()
  trafficConsumptionBytes: number;

  @Expose()
  temporaryStorageUsageBytes: number;

  @Type(() => ProjectNamespaceServiceAppDashboardDto)
  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;
}
