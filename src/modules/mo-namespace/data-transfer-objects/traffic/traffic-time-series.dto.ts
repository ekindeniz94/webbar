import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';

export class TrafficTimeSeriesDto {
  @Type(() => Number)
  @Expose()
  localReceivedBytes: number;

  @Type(() => Number)
  @Expose()
  localTransmitBytes: number;

  @Type(() => Number)
  @Expose()
  packetsSum: number;

  @Type(() => Number)
  @Expose()
  receivedBytes: number;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  timeStamp: Date;

  @Type(() => Number)
  @Expose()
  transmitBytes: number;
}
