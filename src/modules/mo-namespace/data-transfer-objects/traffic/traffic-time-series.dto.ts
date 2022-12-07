import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { isNumber } from 'class-validator';

export class TrafficTimeSeriesDto {
  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  localReceivedBytes: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  localTransmitBytes: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  packetsSum: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  receivedBytes: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Expose()
  transmitBytes: number;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  timeStamp: Date;
}
