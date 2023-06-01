import { Expose } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto';

export class ProjectNamespaceServiceAppDto {
  @Expose()
  id: string;

  @Expose()
  icon: string;

  @Expose()
  image: string;

  @Expose()
  name: string;

  @Expose()
  type: AppLibraryTypeEnum; // Enum

  @Expose()
  description: string;
}
