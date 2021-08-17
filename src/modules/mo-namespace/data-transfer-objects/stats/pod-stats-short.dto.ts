import { Expose, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class PodStatsShortDto {
  @IsString()
  @Expose()
  podId: string;

  @IsNumber()
  @Expose()
  cpuCoresLimit: number;

  @IsNumber()
  @Expose()
  cpuCoresUtilization: number;

  @IsNumber()
  @Expose()
  memoryLimit: number;

  @IsNumber()
  @Expose()
  memoryUsage: number;
}
