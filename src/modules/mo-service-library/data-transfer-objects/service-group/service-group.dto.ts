import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { FileDto } from '../../../mo-file/data-transfer-objects/file.dto';
import { ServiceGroupStateEnum } from '../../enums';
import { ServiceDto } from '../service';

export class ServiceGroupDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  descriptionShort: string;

  @Expose()
  description: string;

  @Expose()
  image: FileDto;

  @Expose()
  services: ServiceDto[];

  @Expose()
  state: ServiceGroupStateEnum;

  @Expose()
  color: string;
}
