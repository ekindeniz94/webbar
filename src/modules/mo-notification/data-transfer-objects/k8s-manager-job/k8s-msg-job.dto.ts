import { Expose, Type } from 'class-transformer';
import { K8sMsgTaskDto } from './k8s-msg-task.dto';

export class K8sMsgJobDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Type(() => K8sMsgTaskDto)
  @Expose()
  data: K8sMsgTaskDto[];

  @Expose()
  finished: boolean;
}
