import { BaseEntityDto } from '@mo/database-dto';
import { Expose, Type } from 'class-transformer';
import { ProjectCiCdNamespaceServiceDto } from './project-cicd-namespace-service.dto';

export class ProjectCiCdNamespaceDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Type(() => ProjectCiCdNamespaceServiceDto)
  @Expose()
  services: ProjectCiCdNamespaceServiceDto[];
}
