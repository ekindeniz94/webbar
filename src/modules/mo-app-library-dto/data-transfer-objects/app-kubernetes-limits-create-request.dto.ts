import { ProjectNamespaceServiceImagePullPolicyEnum } from '../../mo-project-dto/enums/project-namespace-service-image-pull-policy.enum';
import { ProjectNamespaceServiceContainerKubernetesLimitsDto } from '../../mo-project-dto/data-transfer-objects/project-namespace-service-container/project-namespace-service-container-kubernetes-limits.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class AppKubernetesLimitsCreateRequestDto extends ProjectNamespaceServiceContainerKubernetesLimitsDto {
  @Transform(({ value }) => value ?? ProjectNamespaceServiceImagePullPolicyEnum.ALWAYS)
  @IsOptional()
  @IsEnum(ProjectNamespaceServiceImagePullPolicyEnum)
  @Expose()
  imagePullPolicy: ProjectNamespaceServiceImagePullPolicyEnum;
}
