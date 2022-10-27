import { Expose, Type } from 'class-transformer';

export class AvailableResourcesDto {
  @Type(() => Number)
  @Expose()
  cpuCore: number;

  @Type(() => Number)
  @Expose()
  memory: number;

  @Type(() => Number)
  @Expose()
  temporaryStorage: number;
}
