import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceDashboardStageServiceNotificationDto } from './namespace-dashboard-stage-service-notification.dto';
import { isArray, isBoolean, IsOptional } from 'class-validator';
import { NamespaceServiceStateEnum } from '../../enums';
import { NamespaceDashboardStageAppDto } from './namespace-dashboard-stage-app.dto';

export class NamespaceDashboardStageServiceDto {
  @Expose()
  id: string;

  @Expose()
  createdAt: string | Date;

  @Expose()
  updatedAt: string | Date;

  @Expose()
  displayName: string;

  @Expose()
  @IsOptional()
  containerImage: string;

  @Expose()
  state: NamespaceServiceStateEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;

  @Type(() => NamespaceDashboardStageServiceNotificationDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  notifications: NamespaceDashboardStageServiceNotificationDto[];

  @Type(() => NamespaceDashboardStageAppDto)
  @Expose()
  app: NamespaceDashboardStageAppDto;
}
