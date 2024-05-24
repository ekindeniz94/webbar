import { Expose } from 'class-transformer';
import {IsEnum, IsNotEmpty, IsString, ValidateIf} from 'class-validator';
import { KubernetesWorkloadEnum } from '../../../enums';
import {GitConnectionTypeEnum} from "../../../../../mo-git";

export class KubernetesWorkloadDescribeRequestDto {
  @IsNotEmpty()
  @IsEnum(KubernetesWorkloadEnum)
  @Expose()
  workload: KubernetesWorkloadEnum;

  @IsNotEmpty()
  @ValidateIf((object, value) => object.workload !== KubernetesWorkloadEnum.NAMESPACE)
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  resourceName: string;
}
