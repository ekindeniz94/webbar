import { Expose } from 'class-transformer';
import { ProjectCiCdNamespaceServiceDto } from './project-cicd-namespace-service.dto';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectCiCdNamespaceDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Expose()
  services: ProjectCiCdNamespaceServiceDto[];
}
