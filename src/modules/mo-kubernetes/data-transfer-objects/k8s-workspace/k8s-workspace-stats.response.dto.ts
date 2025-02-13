import { Expose, Transform } from 'class-transformer';
import moment from 'moment/moment';

export class K8sWorkspaceStatsResponseDto {
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  time: Date;

  @Expose()
  value: number;
}
