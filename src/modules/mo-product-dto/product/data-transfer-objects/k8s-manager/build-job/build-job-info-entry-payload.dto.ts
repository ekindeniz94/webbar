import { Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { isString } from 'class-validator';
import { BuildStateEnum } from '../../../enums';
import { KubernetesBuildTaskEnum } from '../../../../../mo-kubernetes';

export class BuildJobInfoEntryPayloadDto {
  @Expose()
  buildId: string;
  //
  // @Expose()
  // projectId: string;
  //
  // @Expose()
  // namespace: string;
  //
  // @Expose()
  // controller: string;
  //
  // @Expose()
  // container: string;

  @Transform(({ value, obj }) => value ?? obj.prefix)
  @Expose()
  buildTask: KubernetesBuildTaskEnum;

  @Expose()
  state: BuildStateEnum;

  // @Transform(({ value, obj }) => {
  //   obj.results = [];
  //   obj.count = 0;
  //   if (isString(value)) {
  //     obj.results = (value as string).split('/');
  //     obj.count = obj.results.length;
  //   }
  //   return value;
  // })
  // @Expose()
  // result: string;

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
