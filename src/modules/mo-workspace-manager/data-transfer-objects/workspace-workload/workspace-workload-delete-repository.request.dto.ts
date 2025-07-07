import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { K8sResourceEntryDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-resource-entry.dto';
import { WorkspaceWorkloadCreateRepositoryWorkflowRequestDto } from './workspace-workload-create-repository-workflow.request.dto';

export class WorkspaceWorkloadDeleteRepositoryRequestDto {
  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sResourceEntryDto)
  @Expose()
  resource: K8sResourceEntryDto;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => WorkspaceWorkloadCreateRepositoryWorkflowRequestDto)
  @Expose()
  workflow: WorkspaceWorkloadCreateRepositoryWorkflowRequestDto;
}
