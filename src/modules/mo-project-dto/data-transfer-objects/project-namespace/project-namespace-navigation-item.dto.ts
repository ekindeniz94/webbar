import { Expose } from 'class-transformer';

export class ProjectNamespaceNavigationItemDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  name: string;
}
