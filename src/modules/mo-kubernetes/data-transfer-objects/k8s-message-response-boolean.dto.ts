import { Expose } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';
import { TransformToBoolean } from '@mogenius/js-utils';

export class K8sMessageResponseBooleanDto extends K8sMessageResponseBaseDto<boolean> {
  @TransformToBoolean(true)
  @Expose()
  data?: boolean;
}
