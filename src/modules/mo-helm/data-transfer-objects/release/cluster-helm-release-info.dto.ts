import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class ClusterHelmReleaseInfoDto {
  @Expose()
  deleted: string;

  @Expose()
  description: string;

  @Transform(({ value, obj }) => {
    value = obj?.last_deployed ?? value;
    return value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value;
  })
  @Expose()
  lastDeployed: Date;

  @Expose()
  status: string;
}
