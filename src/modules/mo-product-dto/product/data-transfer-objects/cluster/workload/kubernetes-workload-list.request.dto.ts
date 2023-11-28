import { Expose } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { KubernetesWorkloadEnum } from '../../../enums';

export class KubernetesWorkloadListRequestDto {
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  kubernetesWorkload: KubernetesWorkloadEnum;

  @IsOptional()
  @Expose()
  namespace?: string;
}
