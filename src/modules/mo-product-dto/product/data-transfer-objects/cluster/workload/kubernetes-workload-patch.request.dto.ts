import { Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { KubernetesWorkloadEnum } from '../../../enums';

export class KubernetesWorkloadPatchRequestDto {
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  kubernetesWorkload: KubernetesWorkloadEnum;

  @Expose()
  data: any;
}
