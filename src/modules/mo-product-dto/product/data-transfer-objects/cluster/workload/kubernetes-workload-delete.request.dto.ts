import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { KubernetesWorkloadEnum } from '../../../enums';

export class KubernetesWorkloadDeleteRequestDto {
  @IsNotEmpty()
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  kubernetesWorkload: KubernetesWorkloadEnum;

  @IsString()
  @IsNotEmpty()
  @Expose()
  namespace: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;
}
