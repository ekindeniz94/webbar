import { Expose, Transform, Type } from 'class-transformer';
import { isNumber } from 'lodash';
import { isArray } from 'class-validator';

export class DashboardStatsStagesDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Type(() => Number)
  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  value: number;

  @Type(() => Number)
  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  limit: number;

  @Type(() => Number)
  @Transform(({ value, obj }) => {
    obj.limit = obj.limit ?? 0;
    if (!obj.limit) {
      return 0;
    }
    value = (obj.value ?? 0) / obj.limit;
    return value && isNumber(value) ? +(Math.round(value * 100 * 100) / 100).toFixed(2) : 0;
  })
  @Expose()
  percentage: number;

  @Expose()
  bgColorClass: string;

  get percentageStr(): string {
    return `${this.percentage}%`;
  }
}

export class DashboardStatsItemDto {
  @Expose()
  label: string;

  @Expose()
  smLabel: string;

  @Expose()
  fromToLabel: string;

  @Expose()
  unit: string;

  @Type(() => Number)
  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  limit: number;

  @Type(() => Number)
  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  value: number;

  @Type(() => DashboardStatsStagesDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  stages: DashboardStatsStagesDto[];

  @Type(() => Number)
  @Transform(({ value, obj }) => {
    obj.limit = obj.limit ?? 0;
    if (!obj.limit) {
      return 0;
    }
    value = (obj.value ?? 0) / obj.limit;
    return value && isNumber(value) ? +(Math.round(value * 100 * 100) / 100).toFixed(2) : 0;
  })
  @Expose()
  percentage: number;
}

// totalResources[key].totalPercentage += percentage;
// totalResources[key].value += value;
// totalResources[key].totalPercentage = Math.ceil(totalResources[key].totalPercentage);
// totalResources[key].stages.push({
//   id: stageId,
//   name: stageName,
//   value: value,
//   percentage: percentage,
//   percentageStr: `${percentage}%`,
//   bgColorClass: `${this._bgColorClass[index % this._bgColorClass.length]}`
// });

export class DashboardStatsDto {
  @Type(() => DashboardStatsItemDto)
  @Transform(({ value }) => {
    value.label = value.label ?? 'CPU';
    value.smLabel = value.smLabel ?? 'allocated';
    value.fromToLabel = value.fromToLabel ?? 'of';
    value.unit = value.unit ?? 'Cores';
    return value;
  })
  @Expose()
  cpu: DashboardStatsItemDto;

  @Type(() => DashboardStatsItemDto)
  @Transform(({ value }) => {
    value.label = value.label ?? 'RAM';
    value.smLabel = value.smLabel ?? 'allocated';
    value.fromToLabel = value.fromToLabel ?? 'of';
    value.unit = value.unit ?? 'MB';
    return value;
  })
  @Expose()
  memory: DashboardStatsItemDto;

  @Type(() => DashboardStatsItemDto)
  @Transform(({ value }) => {
    value.label = value.label ?? 'Temp. Storage';
    value.smLabel = value.smLabel ?? 'in use';
    value.fromToLabel = value.fromToLabel ?? 'of';
    value.unit = value.unit ?? 'MB';
    return value;
  })
  @Expose()
  ephemeralStorage: DashboardStatsItemDto;

  @Type(() => DashboardStatsItemDto)
  @Transform(({ value }) => {
    value.label = value.label ?? 'Storage';
    value.smLabel = value.smLabel ?? 'in use';
    value.fromToLabel = value.fromToLabel ?? 'of';
    value.unit = value.unit ?? 'MB';
    return value;
  })
  @Expose()
  storage: DashboardStatsItemDto;

  @Type(() => DashboardStatsItemDto)
  @Transform(({ value }) => {
    value.label = value.label ?? 'Traffic';
    value.smLabel = value.smLabel ?? 'consumption';
    value.fromToLabel = value.fromToLabel ?? 'of';
    value.unit = value.unit ?? 'MB';
    return value;
  })
  @Expose()
  traffic: DashboardStatsItemDto;
}
