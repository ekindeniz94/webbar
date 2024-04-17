import { Expose } from 'class-transformer';
import { ProjectCiCdNamespaceServiceDto } from './project-cicd-namespace-service.dto';

export class ProjectCiCdNamespaceDto {
  @Expose()
  id: string;

  @Expose()
  displayName: string;

  @Expose()
  services: ProjectCiCdNamespaceServiceDto[] | null;
}
