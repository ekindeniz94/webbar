import { Expose } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-message-response-base.dto';
import { IsString } from 'class-validator';

export class NetworkPolicyCreateLabeledResponseDto extends K8sMessageResponseBaseDto<string> {
  @IsString()
  @Expose()
  data?: string;
}
  