import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto/dist/data-transfer-objects/base.entity.dto';
import { ServiceControllerEnum } from '../../enums';

export class ProjectNamespaceServiceAppDashboardDto extends BaseEntityDto {
  @Expose()
  icon: string;

  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum; // Enum

  @Expose()
  description: string;

  @Expose()
  descriptionShort: string;
}
