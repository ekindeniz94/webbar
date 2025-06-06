import { Expose, Transform } from 'class-transformer';
import { K8sMessageResponseBaseDto } from './k8s-message-response-base.dto';

export class K8sMessageResponseRecordStringDto extends K8sMessageResponseBaseDto<Record<string, string>> {
  @Transform(({ value }: { value: Record<string, string> }) => {
    const result: Record<string, string> = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = `${val}`;
    }
    return result;
  })
  @Expose()
  data?: Record<string, string>;
}
