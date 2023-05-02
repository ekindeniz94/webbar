import { Expose } from 'class-transformer/types/decorators';
import { IsNumber } from 'class-validator/types/decorator/decorators';
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
