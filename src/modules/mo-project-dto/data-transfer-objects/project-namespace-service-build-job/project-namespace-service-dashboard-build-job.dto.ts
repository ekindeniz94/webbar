import { Expose } from 'class-transformer';

export class ProjectNamespaceServiceDashboardBuildJobDto {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  status: string; // Enum
}
