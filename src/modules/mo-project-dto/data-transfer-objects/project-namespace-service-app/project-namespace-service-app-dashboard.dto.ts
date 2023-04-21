import { Expose } from 'class-transformer';

export class ProjectNamespaceServiceAppDashboardDto {
  @Expose()
  id: string;

  @Expose()
  icon: string;

  @Expose()
  image: string;

  @Expose()
  name: string;

  @Expose()
  type: string; // Enum

  @Expose()
  description: string;
}
