import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { VolumeStatsDto } from './volume-stats.dto';

export class VolumePaginationDto {
  @Expose()
  items: VolumeStatsDto[];

  @Expose()
  @IsNumber()
  total: number;

  @Expose()
  @IsNumber()
  page: number;

  @Expose()
  @IsNumber()
  size: number;
}
