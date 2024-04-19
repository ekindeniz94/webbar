import { Expose, Transform, Type } from 'class-transformer';
import { BuildJobInfoEntryPayloadDto } from './build-job-info-entry-payload.dto';
import moment from 'moment/moment';
import { BuildStateEnum } from '../../../enums';
import { ALLOWED_BUILD_TASKS } from '../../../../../mo-kubernetes';

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

  public buildState(): BuildStateEnum | undefined {
    const hierarchy = [BuildStateEnum.STARTED, BuildStateEnum.FAILED, BuildStateEnum.SUCCEEDED, BuildStateEnum.PENDING];
    return this.tasks.reduce((acc: BuildStateEnum | undefined, buildJobInfoentry) => {
      if (!acc || hierarchy.indexOf(acc) < hierarchy.indexOf(buildJobInfoentry.state)) {
        return buildJobInfoentry.state;
      } else {
        return acc;
      }
    }, undefined);
  }

  // @Type(() => BuildJobInfoPayloadDto)
  // @Expose()
  // clone: BuildJobInfoPayloadDto;
  //
  // @Type(() => BuildJobInfoPayloadDto)
  // @Expose()
  // ls: BuildJobInfoPayloadDto;
  //
  // @Type(() => BuildJobInfoPayloadDto)
  // @Expose()
  // login: BuildJobInfoPayloadDto;
  //
  // @Type(() => BuildJobInfoPayloadDto)
  // @Expose()
  // build: BuildJobInfoPayloadDto;
  //
  // @Type(() => BuildJobInfoPayloadDto)
  // @Expose()
  // push: BuildJobInfoPayloadDto;
  //
  // @Type(() => BuildJobInfoPayloadDto)
  // @Expose()
  // scan: BuildJobInfoPayloadDto;
}
