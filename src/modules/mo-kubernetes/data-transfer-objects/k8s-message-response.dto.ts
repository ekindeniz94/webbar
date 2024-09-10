import { Expose } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';

export class K8sMessageResponseDto extends K8sMessageResponseBaseDto<string> {
  @Expose()
  data?: string;
}
