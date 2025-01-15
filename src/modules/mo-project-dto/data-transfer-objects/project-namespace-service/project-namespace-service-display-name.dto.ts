import { Expose, Transform } from 'class-transformer';
import { IsOptional, isString } from 'class-validator';
import { BaseEntityDto } from '@mogenius/database-dto';
import { ServiceControllerEnum } from '../../enums';

export class ProjectNamespaceServiceDisplayNameDto extends BaseEntityDto {
  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @IsOptional()
  @Expose()
  description: string;
}
