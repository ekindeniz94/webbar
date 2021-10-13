import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { ServiceGroupStateEnum } from '../../enums';
import { ServiceDto } from '../service';
import { FilePublicDto } from '../../../mo-file';

export class ServiceGroupDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  descriptionShort: string;

  @Expose()
  description: string;

  @Type(() => FilePublicDto)
  @Expose()
  icon: FilePublicDto;

  @Type(() => FilePublicDto)
  @Expose()
  image: FilePublicDto;

  @Type(() => ServiceDto)
  @Expose()
  services: ServiceDto[];

  @Expose()
  state: ServiceGroupStateEnum;

  @Expose()
  color: string;
}
