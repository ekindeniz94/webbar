import { Expose, Type } from 'class-transformer';
import { FilePublicDto } from '../../../mo-file';

export class NamespaceDashboardStageServiceLibraryDto {
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
}
