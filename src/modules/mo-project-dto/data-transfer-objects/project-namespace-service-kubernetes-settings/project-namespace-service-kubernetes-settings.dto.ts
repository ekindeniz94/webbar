import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceImagePullPolicyEnum } from '../../enums';
import { isBoolean, ValidateNested } from 'class-validator';
import { K8sCronJobSettingsDto } from '../k8s';

export class ProjectNamespaceServiceKubernetesSettingsDto {
  @Type(() => Number)
  @Expose()
  limitMemoryMB: number;

  @Type(() => Number)
  @Expose()
  limitCpuCores: number;

  @Expose()
  imagePullPolicy: ProjectNamespaceServiceImagePullPolicyEnum;

  @Type(() => Number)
  @Expose()
  ephemeralStorageMB: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (value && isBoolean(value) ? value : false))
  @Expose()
  probesOn: boolean;

  @Type(() => K8sCronJobSettingsDto)
  @ValidateNested()
  @Expose()
  k8sCronJobSettingsDto?: K8sCronJobSettingsDto;
}
