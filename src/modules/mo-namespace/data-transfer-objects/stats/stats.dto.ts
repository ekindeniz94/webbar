import { Expose, Transform } from 'class-transformer';
import { isNumber } from 'lodash';
import { PodStatsUnitEnum } from '../../enums';

export class StatsDto {
  @Expose()
  unit: PodStatsUnitEnum;

  @Expose()
  @Transform(({ value }) => (value && isNumber(value) ? Number(value.toFixed(2)) : 0))
  current: number;

  @Expose()
  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  limit: number;

  @Expose()
  @Transform(({ value }) => (value && isNumber(value) ? Math.ceil(value * 100) : 0))
  percentage: number;
}
