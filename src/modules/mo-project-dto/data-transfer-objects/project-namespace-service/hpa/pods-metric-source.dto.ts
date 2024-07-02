import { Expose, Type } from 'class-transformer';
import { MetricIdentifier } from './metric-identifier.dto';
import { MetricTarget } from './metric-target.dto';

export class PodsMetricSource {
  @Type(() => MetricIdentifier)
  @Expose()
  metric: MetricIdentifier;

  @Type(() => MetricTarget)
  @Expose()
  target: MetricTarget;
}
