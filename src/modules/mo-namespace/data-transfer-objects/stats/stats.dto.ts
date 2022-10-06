import { Expose, Transform, Type } from 'class-transformer';
import { isNumber } from 'lodash';
import { PodStatsUnitEnum } from '../../enums';

export class StatsDto {
  @Expose()
  unit: PodStatsUnitEnum;

  @Type(() => Number)
  @Expose()
  @Transform(({ value }) => (value && isNumber(value) ? Number(value.toFixed(2)) : 0))
  current: number;

  @Type(() => Number)
  @Expose()
  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  limit: number;

  @Type(() => Number)
  @Expose()
  @Transform(({ value, obj }) => {
    obj.limit = obj.limit ?? 0;
    if (!obj.limit) {
      return 0;
    }
    value = (obj.current ?? 0) / obj.limit;
    return value && isNumber(value) ? +(Math.round(value * 100 * 100) / 100).toFixed(2) : 0;
  })
  percentage: number;
}
