import { Expose, Type } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto';
import { ProjectNamespaceServiceContainerKubernetesSettingsDto } from '../project-namespace-service-container';

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

  @Type(() => ProjectNamespaceServiceContainerKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceContainerKubernetesSettingsDto;
}
