import { Expose } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto';
import { BaseEntityDto } from '@mo/database-dto/dist/data-transfer-objects/base.entity.dto';

export class ProjectNamespaceServiceAppDashboardDto extends BaseEntityDto {
  @Expose()
  icon: string;

  @Expose()
  name: string;

  @Expose()
  type: AppLibraryTypeEnum; // Enum

  @Expose()
  description: string;

  @Expose()
  descriptionShort: string;
}
