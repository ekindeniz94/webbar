import { Expose, plainToInstance, Transform } from 'class-transformer';
import { ComputeTimeSeriesDto } from './compute-time-series.dto';

export class ComputeTimeSeriesResponseDto {
  @Transform(
    ({ value }) =>
      Object.entries(value).reduce(
        (acc, [key, val]) => {
          acc[key] = (val as any).map((item: any) => plainToInstance(ComputeTimeSeriesDto, item));
          return acc;
        },
        {} as { [key: string]: ComputeTimeSeriesDto[] }
      ),
    { toClassOnly: true }
  )
  @Expose()
  pods: { [key: string]: ComputeTimeSeriesDto[] };
}
