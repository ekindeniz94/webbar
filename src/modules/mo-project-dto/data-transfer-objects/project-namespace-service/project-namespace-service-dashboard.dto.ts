import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceAppDashboardDto } from '../project-namespace-service-app/project-namespace-service-app-dashboard.dto';
import { ProjectNamespaceServiceStateEnum, ServiceTypeEnum } from '../../enums';
import moment from 'moment';
import { isBoolean } from 'class-validator';

export class ProjectNamespaceServiceDashboardDto {
  @Expose()
  id: string;

  @Expose()
  type: ServiceTypeEnum;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Expose()
  displayName: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;

  @Expose()
  state: ProjectNamespaceServiceStateEnum; // Enum ### Not the build state

  @Type(() => ProjectNamespaceServiceAppDashboardDto)
  @Expose()
  app: ProjectNamespaceServiceAppDashboardDto;
}
