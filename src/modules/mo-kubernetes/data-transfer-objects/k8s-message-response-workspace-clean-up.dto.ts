import { Expose, Type } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';
import { K8sWorkspaceCleanUpResponseDto } from './k8s-workspace';

export class K8sMessageResponseWorkspaceCleanUpDto extends K8sMessageResponseBaseDto<K8sWorkspaceCleanUpResponseDto> {
  @Type(() => K8sWorkspaceCleanUpResponseDto)
  @Expose()
  data: K8sWorkspaceCleanUpResponseDto;
}
