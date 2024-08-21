import { Expose, Transform } from 'class-transformer';
import { TrafficTimeSeriesDto } from './traffic-time-series.dto';
import { MoUtils } from '@mogenius/js-utils';

export class TrafficTimeSeriesResponseDto {
  // @Type(() => TrafficTimeSeriesDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // results: TrafficTimeSeriesDto[];

  @Transform(
    ({ value }) =>
      Object.entries(value).reduce(
        (acc, [key, val]) => {
          acc[key] = MoUtils.transformToDtoList(TrafficTimeSeriesDto, val as any);
          return acc;
        },
        {} as { [key: string]: TrafficTimeSeriesDto[] }
      ),
    { toClassOnly: true }
  )
  @Expose()
  pods: { [key: string]: TrafficTimeSeriesDto[] };
}
