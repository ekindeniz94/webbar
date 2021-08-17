import { Expose, Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PodStatsShortDto {
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
