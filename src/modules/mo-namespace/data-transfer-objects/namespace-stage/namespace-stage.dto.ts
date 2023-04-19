import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isString } from 'class-validator';
import { NamespaceDto } from '../namespace';
import { NamespaceNotificationDto } from '../../../mo-notification';
import moment from 'moment';
import { ProjectNamespaceServiceDto } from '../../../mo-project-dto';
import { BaseEntityDto } from '@mo/database-dto';

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
  @Type(() => ProjectNamespaceServiceDto)
  @Expose()
  services: ProjectNamespaceServiceDto[];

  @Type(() => Number)
  @Transform(({ value, obj }) => value ?? obj.services?.length)
  @Expose()
  serviceCount: number;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceNotificationDto)
  @Expose()
  notifications: NamespaceNotificationDto[];
}
