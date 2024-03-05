import { ProjectNamespaceServiceImagePullPolicyEnum } from '../../mo-project-dto/enums/project-namespace-service-image-pull-policy.enum';
import { ProjectNamespaceServiceContainerKubernetesSettingsDto } from '../../mo-project-dto/data-transfer-objects/project-namespace-service-container/project-namespace-service-container-kubernetes-settings.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class AppKubernetesLimitsCreateRequestDto extends ProjectNamespaceServiceContainerKubernetesSettingsDto {
  @IsOptional()
  @IsEnum(ProjectNamespaceServiceImagePullPolicyEnum)
  @Expose()
  imagePullPolicy: ProjectNamespaceServiceImagePullPolicyEnum;
}
