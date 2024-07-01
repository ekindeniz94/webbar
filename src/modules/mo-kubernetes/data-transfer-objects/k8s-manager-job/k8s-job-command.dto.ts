import { Expose, Transform } from 'class-transformer';
import { K8sBuildTaskEnum, K8sJobStateEnum } from '../../enums';
import moment from 'moment';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class K8sJobCommandDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  command: K8sBuildTaskEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  @IsString()
  @Transform(({ value, obj }) => (value && value !== 'undefined' && value !== 'null' ? value : obj.title))
  @Expose()
  message: string;

  @IsNotEmpty()
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  started: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  finished: Date;

  @IsNotEmpty()
  @IsEnum(K8sJobStateEnum)
  @Expose()
  state: K8sJobStateEnum;

  @Transform(({ value, obj }) => {
    obj.started =
      obj.started && obj.started !== 'undefined' && obj.started !== 'null' ? moment(obj.started).toDate() : obj.started;
    obj.finished =
      obj.started && obj.finished && obj.finished !== 'undefined' && obj.finished !== 'null'
        ? moment(obj.finished).toDate()
        : new Date();
    return moment(obj.finished).diff(moment(obj.started), 'milliseconds');
  })
  @Expose()
  durationMs: number;
}
