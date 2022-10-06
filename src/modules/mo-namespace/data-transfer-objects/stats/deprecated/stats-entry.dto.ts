// import { Expose, Type } from 'class-transformer';
// import { IsNumber, IsString } from 'class-validator';
//
// export class StatsEntryDto {
//   @IsString()
//   @Expose()
//   name: string;
//
//   @Type(() => Number)
//   @IsNumber()
//   @Expose()
//   cpuCoresLimit: number;
//
//   @Type(() => Number)
//   @IsNumber()
//   @Expose()
//   cpuCoresUtilization: number;
//
//   @Type(() => Number)
//   @IsNumber()
//   @Expose()
//   memoryLimit: number;
//
//   @Type(() => Number)
//   @IsNumber()
//   @Expose()
//   memoryUsage: number;
//
//   @Type(() => Number)
//   @IsNumber()
//   @Expose()
//   ephemeralStorageLimit?: number;
//
//   @Type(() => Number)
//   @IsNumber()
//   @Expose()
//   ephemeralStorageUsage?: number;
//
//   @Type(() => Number)
//   @IsNumber()
//   @Expose()
//   overallTraffic?: number;
// }
//