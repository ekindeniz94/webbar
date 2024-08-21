import { Expose, Type } from 'class-transformer';
import { ContainerMetricsDto } from './container-metrics.dto';

export class PodMetricsDto {
  @Expose()
  name: string;

  @Expose()
  @Type(() => ContainerMetricsDto)
  containers: ContainerMetricsDto[];
}
