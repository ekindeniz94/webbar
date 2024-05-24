import { Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { K8sBuildTaskEnum } from '../../enums/k8s-manager/k8s-build-task.enum';
import { K8sBuildStateEnum } from '../../enums/k8s-manager/k8s-build-state.enum';

export class BuildJobInfoEntryPayloadDto {
  @Expose()
  buildId: string;

  @Transform(({ value, obj }) => value ?? obj.prefix)
  @Expose()
  buildTask: K8sBuildTaskEnum;

  @Expose()
  state: K8sBuildStateEnum;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  finishTime: Date;

  @Expose()
  durationMs: number;

  @Expose()
  count: number;

  @Expose()
  results: string[];
}
