import { Expose, Type } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto/enums/app-library-type.enum';

export class NamespaceDashboardStageAppDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  icon: string;

  @Expose()
  image: string;

  @Expose()
  type: AppLibraryTypeEnum;
}
