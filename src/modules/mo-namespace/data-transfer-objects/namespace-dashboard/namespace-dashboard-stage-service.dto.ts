import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceDashboardStageServiceLibraryDto } from './namespace-dashboard-stage-service-library.dto';
import { NamespaceDashboardStageServiceNotificationDto } from './namespace-dashboard-stage-service-notification.dto';
import { isArray } from 'class-validator';

export class NamespaceDashboardStageServiceDto {
  @Expose()
  id: string;

  @Expose()
  createdAt: string | Date;

  @Expose()
  updatedAt: string | Date;

  @Expose()
  displayName: string;

  @Type(() => NamespaceDashboardStageServiceNotificationDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  notifications: NamespaceDashboardStageServiceNotificationDto[];

  @Type(() => NamespaceDashboardStageServiceLibraryDto)
  @Expose()
  service: NamespaceDashboardStageServiceLibraryDto;
}
