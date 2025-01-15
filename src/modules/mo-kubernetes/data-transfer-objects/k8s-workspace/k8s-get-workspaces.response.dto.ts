import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { K8sWorkspaceResourceDto } from './k8s-workspace-resource.dto';
import { K8sWorkspaceDto } from './k8s-workspace.dto';

export class K8sGetWorkspacesResponseDto extends K8sMessageResponseBaseDto<K8sWorkspaceDto[]> {
  @Transform(({ value }) => MoUtils.transformToDtoList(K8sWorkspaceDto, value ?? []))
  @Expose()
  data: K8sWorkspaceDto[];
}
