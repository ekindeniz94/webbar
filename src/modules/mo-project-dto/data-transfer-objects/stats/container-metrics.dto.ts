import { Expose, Transform } from 'class-transformer';
import { isNumber } from 'class-validator';

export class ContainerMetricsDto {
  @Expose()
  name: string;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  cpuUsage: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  cpuRequest: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  memoryUsage: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  memoryRequest: number;
}
