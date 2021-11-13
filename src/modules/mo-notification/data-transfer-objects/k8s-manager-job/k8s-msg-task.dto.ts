import { K8sMsgDto } from './k8s-msg.dto';
import { Expose } from 'class-transformer';

export class K8sMsgTaskDto {
  @Expose()
  id: string;

  @Expose()
  data: K8sMsgDto;
}
