import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, isString, IsString, ValidateNested } from 'class-validator';
import { K8sResourceEntryDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-resource-entry.dto';
import { V1Secret } from '@kubernetes/client-node';
import { MoProjectDtoUtils } from '../../../mo-project-dto';
import { KUBERNETES_CONST } from '../../../mo-kubernetes';

export class WorkspaceWorkloadCreateRepositoryRequestDto {
  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sResourceEntryDto)
  @Expose()
  resource: K8sResourceEntryDto;

  @IsNotEmpty()
  @IsString()
  @Expose()
  gitRepository: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  gitBranch: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  dockerfileName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  dockerContext: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  apiKey: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryAuthUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryUser: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryPat: string;

  @IsOptional()
  @Expose()
  imagePullSecretResource?: V1Secret;

  @IsNotEmpty()
  @IsString()
  @Expose()
  imagePullSecretResourceJson: string;

  @IsOptional()
  @IsString()
  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadCreateRepositoryRequestDto }) => {
    if (!value) {
      if (obj.imagePullSecretResource) {
        return obj.imagePullSecretResource.metadata?.name;
      }
      if (obj.imagePullSecretResourceJson) {
        return `img-pull-sec-${obj.name}`;
      }
    }
    if (value && isString(value)) {
      value = MoProjectDtoUtils.k8sName(value, KUBERNETES_CONST.NAME.MAX);
    }

    return value;
  })
  @Expose()
  imagePullSecretResourceName?: string;
}
