import { Expose } from 'class-transformer';
import { CiCdPipelineResultEnum } from 'src/mo-core-base';

export class ProjectCiCdNamespaceServiceBuildJobDto {
  @Expose()
  startTime: Date;

  @Expose()
  finishTime: Date;

  @Expose()
  id: string;

  @Expose()
  jobName: string;

  @Expose()
  state: string;

  @Expose()
  result?: CiCdPipelineResultEnum;

  @Expose()
  logId: string;
}
