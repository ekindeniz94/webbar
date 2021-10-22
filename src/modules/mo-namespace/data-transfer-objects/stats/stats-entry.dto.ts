import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class StatsEntryDto {
  @IsString()
  @Expose()
  name: string;

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

  @IsNumber()
  @Expose()
  ephemeralStorageLimit?: number;

  @IsNumber()
  @Expose()
  ephemeralStorageUsage?: number;

  @IsNumber()
  @Expose()
  overallTraffic?: number;
}
