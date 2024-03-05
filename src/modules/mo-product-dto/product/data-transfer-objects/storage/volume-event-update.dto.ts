import { Expose, Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { VolumeEventUpdateEnum } from '../../enums/volume-event-update.enum';
import { VolumeStatsDto } from './volume-stats.dto';

export class VolumeEventUpdateDto {
  @Expose()
  @IsString()
  namespaceName: string;

  @Expose()
  @IsString()
  volumeName: string;

  @Expose()
  event: VolumeEventUpdateEnum;

  @Expose()
  @IsOptional()
  @Type(() => VolumeStatsDto)
  item: VolumeStatsDto;
}
