import { Expose } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';

export class K8sMessageResponseAnyDto extends K8sMessageResponseBaseDto<any> {
  @Expose()
  data?: any;
}
