import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceDashboardStageServiceDto } from './namespace-dashboard-stage-service.dto';
import { isArray } from 'class-validator';

export class NamespaceDashboardStageDto {
  @Expose()
  id: string;

  @Expose()
  createdAt: string | Date;

  @Expose()
  updatedAt: string | Date;

  @Expose()
  displayName: string;

  @Type(() => NamespaceDashboardStageServiceDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  services: NamespaceDashboardStageServiceDto[];
}
