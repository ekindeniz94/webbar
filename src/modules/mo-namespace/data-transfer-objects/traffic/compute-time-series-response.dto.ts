import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { ComputeTimeSeriesDto } from './compute-time-series.dto';

export class ComputeTimeSeriesResponseDto {
  @Type(() => ComputeTimeSeriesDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  results: ComputeTimeSeriesDto[];
}
