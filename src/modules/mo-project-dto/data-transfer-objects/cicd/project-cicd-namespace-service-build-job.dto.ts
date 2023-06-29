import { Expose, Transform } from 'class-transformer';
import { CiCdPipelineResultEnum } from '../../../mo-core';
import moment from 'moment';

export class ProjectCiCdNamespaceServiceBuildJobDto {
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
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
