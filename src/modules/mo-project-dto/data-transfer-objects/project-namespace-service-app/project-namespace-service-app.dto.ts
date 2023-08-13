import { Expose, Type } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../project-namespace-service-kubernetes-settings';

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

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;
}
