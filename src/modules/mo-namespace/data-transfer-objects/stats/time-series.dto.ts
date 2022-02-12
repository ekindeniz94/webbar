import {Expose, Type} from 'class-transformer';

export class TimeSeriesDto {
  @Type(() => Number)
  @Expose()
  x: number;

  @Type(() => Number)
  @Expose()
  y: number;
}
