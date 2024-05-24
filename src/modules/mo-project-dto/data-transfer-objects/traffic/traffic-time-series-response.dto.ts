import { Expose, plainToInstance, Transform } from 'class-transformer';
import { TrafficTimeSeriesDto } from './traffic-time-series.dto';

export class TrafficTimeSeriesResponseDto {
  // @Type(() => TrafficTimeSeriesDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // results: TrafficTimeSeriesDto[];

  @Transform(
    ({ value }) =>
      Object.entries(value).reduce(
        (acc, [key, val]) => {
          acc[key] = (val as any).map((item: any) => plainToInstance(TrafficTimeSeriesDto, item));
          return acc;
        },
        {} as { [key: string]: TrafficTimeSeriesDto[] }
      ),
    { toClassOnly: true }
  )
  @Expose()
  pods: { [key: string]: TrafficTimeSeriesDto[] };
}
