import { Expose } from 'class-transformer';

export class NamespaceDashboardStageServiceLibraryDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  iconId: string;

  @Expose()
  imageId: string;
}
