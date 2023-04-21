import { Expose } from 'class-transformer';

export class ProjectNamespaceServiceAppDashboardDto {
  @Expose()
  icon: string;

  @Expose()
  image: string;

  @Expose()
  name: string;

  @Expose()
  type: string; // Enum
}
