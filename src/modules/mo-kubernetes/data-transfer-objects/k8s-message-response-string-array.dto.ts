import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';

export class K8sMessageResponseStringArrayDto extends K8sMessageResponseBaseDto<string> {
  @Transform(({ value }: { value: string[] }) => value.map((item) => `${item}`))
  @Expose()
  data?: string;
}
