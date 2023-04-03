import { Expose } from 'class-transformer';
import { KubernetesWorkloadEnum } from '../enums';
import { IsEnum } from 'class-validator';

export class KubernetesWorkloadPatchRequestDto {
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  kubernetesWorkload: KubernetesWorkloadEnum;

  @Expose()
  data: any;
}
