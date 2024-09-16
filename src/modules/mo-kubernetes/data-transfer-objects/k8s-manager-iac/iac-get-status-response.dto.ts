import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { MoUtils } from '@mogenius/js-utils';
import { IacManagerStatusDto } from './iac-manager-status.dto';

export class IacGetStatusResponseDto extends K8sMessageResponseBaseDto<IacManagerStatusDto> {
  @Transform(({ value }) => MoUtils.transformToDto(IacManagerStatusDto, value, null))
  @Expose()
  data?: IacManagerStatusDto;
}
