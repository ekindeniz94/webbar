import { Expose, Transform, Type } from 'class-transformer';
import { BuildJobInfoPayloadDto } from './build-job-info-payload.dto';
import moment from 'moment/moment';

export class BuildJobInfosPayloadDto {
  @Expose()
  buildId: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  finishTime: Date;

  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  clone: BuildJobInfoPayloadDto;

  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  ls: BuildJobInfoPayloadDto;

  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  login: BuildJobInfoPayloadDto;

  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  build: BuildJobInfoPayloadDto;

  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  push: BuildJobInfoPayloadDto;

  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  scan: BuildJobInfoPayloadDto;
}
