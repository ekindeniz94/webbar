import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceDto } from '../namespace';
import { NamespaceServiceDto } from '../namespace-service';
import {NamespaceNotificationDto} from "../../../mo-notification";

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

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceServiceDto)
  @Expose()
  services: NamespaceServiceDto[];

  @Type(() => Number)
  @Expose()
  cpuCurrentInCores: number;

  @Type(() => Number)
  @Expose()
  memoryCurrentInMB: number;

  @Type(() => Number)
  @Expose()
  storageCurrentInMB: number;

  @Type(() => Number)
  @Expose()
  trafficCurrentInMB: number;

  @Type(() => Number)
  @Expose()
  ephemeralStorageCurrentInMB: number;

  @Expose()
  statsUpdateAt: Date;

  @Type(() => Number)
  @Transform(({ value, obj }) => value ?? obj.services?.length)
  @Expose()
  serviceCount: number;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceNotificationDto)
  @Expose()
  notifications: NamespaceNotificationDto[];
}
