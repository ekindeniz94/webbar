import { Expose, Transform } from 'class-transformer';
import { ComputeTimeSeriesDto } from './compute-time-series.dto';
import { MoUtils } from '@mogenius/js-utils';

export class ComputeTimeSeriesResponseDto {
  @Transform(
    ({ value }) =>
      Object.entries(value).reduce(
        (acc, [key, val]) => {
          acc[key] = MoUtils.transformToDtoList(ComputeTimeSeriesDto, val as any);
          return acc;
        },
        {} as { [key: string]: ComputeTimeSeriesDto[] }
      ),
    { toClassOnly: true }
  )
  @Expose()
  pods: { [key: string]: ComputeTimeSeriesDto[] };
}
