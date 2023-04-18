import { Expose, Type } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto/enums/app-library-type.enum';
import { FilePublicDto } from '../../../mo-file';

export class NamespaceDashboardStageAppDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Type(() => FilePublicDto)
  @Expose()
  icon: FilePublicDto;

  @Type(() => FilePublicDto)
  @Expose()
  image: FilePublicDto;

  @Expose()
  type: AppLibraryTypeEnum;
}
