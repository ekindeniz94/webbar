import { Expose } from 'class-transformer';

export class TimeSeriesDto {
  @Expose()
  x: number;

  @Expose()
  y: number;
}
