import { Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { KubernetesWorkloadEnum } from '../../../enums';

export class KubernetesWorkloadListRequestDto {
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  kubernetesWorkload: KubernetesWorkloadEnum;
}
