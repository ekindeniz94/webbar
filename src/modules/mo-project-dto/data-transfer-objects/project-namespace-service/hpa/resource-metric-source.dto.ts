import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { MetricTarget } from './metric-target.dto';

export class ResourceMetricSource {
  @IsString()
  @Expose()
  name: string;

  @Type(() => MetricTarget)
  @Expose()
  target: MetricTarget;
}
