import { K8sMsgDto } from './k8s-msg.dto';
import { Expose, Type } from 'class-transformer';

export class K8sMsgTaskDto {
  @Expose()
  id: string;

  @Type(() => K8sMsgDto)
  @Expose()
  data: K8sMsgDto;
}
