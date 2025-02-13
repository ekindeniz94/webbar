import { Expose, Type } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';
import { K8sWorkspaceStatsResponseDto } from './k8s-workspace';

export class K8sMessageResponseWorkspaceStatsDto extends K8sMessageResponseBaseDto<K8sWorkspaceStatsResponseDto[]> {
  @Type(() => K8sWorkspaceStatsResponseDto)
  @Expose()
  data: K8sWorkspaceStatsResponseDto[];
}
