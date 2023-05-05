import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class VolumeStatsDto {
  @Expose()
  @IsString()
  volumeId: string;

  @Expose()
  @IsString()
  volumeName: string;

  @Expose()
  @IsNumber()
  totalBytes: number;

  @Expose()
  @IsNumber()
  freeBytes: number;

  @Expose()
  @IsNumber()
  usedBytes: number;
}
