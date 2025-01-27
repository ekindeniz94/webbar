import { Expose, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested, ArrayMinSize } from 'class-validator';
import { K8sGetWorkloadListRequestDto } from '../k8s-workload';

export class K8sGetWorkspaceWorkloadsRequestDto {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Type(() => K8sGetWorkloadListRequestDto)
  @Expose()
  workloads: K8sGetWorkloadListRequestDto[];
}
