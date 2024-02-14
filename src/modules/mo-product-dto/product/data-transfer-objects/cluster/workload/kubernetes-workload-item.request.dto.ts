import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { KubernetesWorkloadEnum } from '../../../enums';

export class KubernetesWorkloadItemRequestDto {
  @IsNotEmpty()
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  workload: KubernetesWorkloadEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  resourceName: string;
}
