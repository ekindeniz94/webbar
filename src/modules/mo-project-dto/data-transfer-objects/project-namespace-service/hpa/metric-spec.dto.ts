import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { MetricSourceTypeEnum } from '../../../enums';
import { PodsMetricSource } from './pods-metric-source.dto';
import { ResourceMetricSource } from './resource-metric-source.dto';

export class MetricSpec {
  @Expose()
  type: MetricSourceTypeEnum;

  @Type(() => PodsMetricSource)
  @IsOptional()
  @Expose()
  pods: PodsMetricSource;

  @Type(() => ResourceMetricSource)
  @IsOptional()
  @Expose()
  resource: ResourceMetricSource;
}
