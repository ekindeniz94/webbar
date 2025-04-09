import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { isNumber } from 'class-validator';
import _ from 'lodash';

export class TrafficTimeSeriesDto {
  @Expose()
  ip: string;

  @Transform(({ value, obj }) => value || obj.podName)
  @Expose()
  pod: string;

  @Expose()
  namespace: string;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  transmitBytes: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  transmitPackets: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  transmitStartBytes: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  receivedBytes: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  receivedPackets: number;

  @Transform(({ value }) => (value && isNumber(value) ? value : 0))
  @Expose()
  receivedStartBytes: number;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Expose()
  get totalTransmitBytes(): number {
    return _.sum([+this.transmitBytes, +this.transmitStartBytes]);
  }

  @Expose()
  get totalReceivedBytes(): number {
    return _.sum([+this.receivedBytes, +this.receivedStartBytes]);
  }

  @Expose()
  get totalTrafficBytes(): number {
    return _.sum([this.receivedBytes, this.transmitBytes]);
  }
}
