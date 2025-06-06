import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';

export class K8sMessageResponseStringDto extends K8sMessageResponseBaseDto<string> {
  @Transform(({ value }: { value: string }) => `${value}`)
  @Expose()
  data?: string;
}
