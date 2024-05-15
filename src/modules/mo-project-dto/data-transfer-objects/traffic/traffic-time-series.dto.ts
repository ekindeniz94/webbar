import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { isNumber } from 'class-validator';
import _ from 'lodash';

export class TrafficTimeSeriesDto {
  @Expose()
  ip: string;

  @Expose()
  podName: string;

  @Expose()
  namespace: string;

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
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  get totalTrafficBytes(): number {
    return _.sum([this.receivedBytes, this.transmitBytes]);
  }

  get totalLocalTrafficBytes(): number {
    return _.sum([this.localReceivedBytes, this.localTransmitBytes]);
  }

  get totalExternalTrafficBytes(): number {
    return this.totalTrafficBytes - this.totalLocalTrafficBytes;
  }
}
