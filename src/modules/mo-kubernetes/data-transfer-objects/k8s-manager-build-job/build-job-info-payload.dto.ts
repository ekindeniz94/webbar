import { Expose, Transform, Type } from 'class-transformer';
import { BuildJobInfoEntryPayloadDto } from './build-job-info-entry-payload.dto';
import moment from 'moment';
import { K8sBuildStateEnum } from '../../enums';
import { ALLOWED_BUILD_TASKS } from '../../mo-kubernetes-dto.const';

export class BuildJobInfoPayloadDto {
  @Expose()
  projectId: string;

  @Expose()
  buildId: string;

  @Expose()
  namespace: string;

  @Expose()
  controller: string;

  @Expose()
  container: string;

  @Expose()
  commitHash: string;

  @Expose()
  commitLink: string;

  @Expose()
  commitAuthor: string;

  @Expose()
  commitMessage: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  finishTime: Date;

  @Transform(({ value, obj }) => {
    obj.startTime =
      obj.startTime && obj.startTime !== 'undefined' && obj.startTime !== 'null'
        ? moment(obj.startTime).toDate()
        : obj.startTime;
    obj.finishTime =
      obj.startTime && obj.finishTime !== 'undefined' && obj.finishTime !== 'null'
        ? moment(obj.finishTime).toDate()
        : obj.finishTime;
    return moment(obj.finishTime).diff(moment(obj.startTime), 'milliseconds');
  })
  @Expose()
  durationMs: number;

  @Transform(({ value, obj }) =>
    value?.filter(
      (item: BuildJobInfoEntryPayloadDto) => !!item.buildTask && ALLOWED_BUILD_TASKS.includes(item.buildTask)
    )
  )
  @Type(() => BuildJobInfoEntryPayloadDto)
  @Expose()
  tasks: BuildJobInfoEntryPayloadDto[];

  public buildState(): K8sBuildStateEnum | undefined {
    if (!this.tasks || this.tasks?.length === 0) {
      return undefined;
    }
    const hierarchy = [
      K8sBuildStateEnum.STARTED,
      K8sBuildStateEnum.FAILED,
      K8sBuildStateEnum.PENDING,
      K8sBuildStateEnum.SUCCEEDED
    ];

    return this.tasks.reduce((acc: K8sBuildStateEnum | undefined, buildJobInfoEntry) => {
      if (!acc || hierarchy.indexOf(acc) > hierarchy.indexOf(buildJobInfoEntry.state)) {
        return buildJobInfoEntry.state;
      } else {
        return acc;
      }
    }, undefined);
  }
}
