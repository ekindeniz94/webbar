import { Expose } from 'class-transformer';
import { KubernetesWorkloadEnum } from '../enums';
import { IsEnum } from 'class-validator';

export class KubernetesWorkloadListRequestDto {
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  kubernetesWorkload: KubernetesWorkloadEnum;
}
