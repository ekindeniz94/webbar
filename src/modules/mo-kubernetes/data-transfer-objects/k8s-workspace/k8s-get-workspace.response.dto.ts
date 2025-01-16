import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { K8sWorkspaceDto } from './k8s-workspace.dto';

export class K8sGetWorkspaceResponseDto extends K8sMessageResponseBaseDto<K8sWorkspaceDto> {
  @Transform(({ value }) => MoUtils.transformToDto(K8sWorkspaceDto, value ?? []))
  @Expose()
  data: K8sWorkspaceDto;
}
