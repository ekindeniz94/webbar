import { Expose, Transform } from 'class-transformer';
import { K8sBuildScanResultInfoEnum } from '../../enums';
import moment from 'moment/moment';

export class K8sBuildScanResultInfoDto {
  @Expose()
  state: K8sBuildScanResultInfoEnum;

  @Expose()
  result: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  finishTime: Date;
}
