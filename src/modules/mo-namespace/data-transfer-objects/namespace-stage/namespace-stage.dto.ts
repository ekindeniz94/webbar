import {Expose, Transform, Type} from 'class-transformer';
import {IsNotEmpty, IsOptional, isString, IsString} from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceDto } from '../namespace';
import { NamespaceServiceDto } from '../namespace-service';

export class NamespaceStageDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Expose()
  subdomain: string;

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
