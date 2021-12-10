import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceDto } from '../namespace';
import { NamespaceServiceDto } from '../namespace-service';

export class NamespaceStageDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  subdomain: string;

  @IsOptional()
  @IsString()
  @Expose()
  description: string;

  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => NamespaceServiceDto)
  @Expose()
  services: NamespaceServiceDto[];

  @Expose()
  cpuCurrentInCores: number;

  @Expose()
  memoryCurrentInMB: number;

  @Expose()
  storageCurrentInMB: number;

  @Expose()
  trafficCurrentInMB: number;

  @Expose()
  ephemeralStorageCurrentInMB: number;

  @Expose()
  statsUpdateAt: Date;
}
