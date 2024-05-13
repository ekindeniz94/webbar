import { Expose, Transform, Type } from 'class-transformer';
import { isNumber } from 'class-validator';
import moment from 'moment';

export class OriginTrafficDto {
  @Transform(({ value }) => (isNumber(value) && value > 0 ? value : 0))
  @Type(() => Number)
  @Expose()
  receivedBytes: number;

  @Transform(({ value }) => (isNumber(value) && value > 0 ? value : 0))
  @Type(() => Number)
  @Expose()
  transmitBytes: number;

  @Transform(({ value }) => (isNumber(value) && value > 0 ? value : 0))
  @Type(() => Number)
  @Expose()
  localReceivedBytes: number;

  @Transform(({ value }) => (isNumber(value) && value > 0 ? value : 0))
  @Type(() => Number)
  @Expose()
  localTransmitBytes: number;

  @Transform(({ value }) => (isNumber(value) && value > 0 ? value : 0))
  @Type(() => Number)
  @Expose()
  limitInMb: number;

  @Transform(({ value }) => (isNumber(value) && value > 0 ? value : 1.3))
  @Type(() => Number)
  @Expose()
  trafficShutdownLimit: number;

  @Transform(({ value }) => (isNumber(value) && value > 0 ? value : 0.9))
  @Type(() => Number)
  @Expose()
  trafficWarningLimit: number;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startTime: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string;

  get isReachingTrafficLimit(): boolean {
    return this.trafficInPercentage > this.trafficWarningLimit * 100;
  }

  get isReachedTrafficLimit(): boolean {
    return this.trafficInPercentage > 100;
  }

  get isTrafficShutdownLimit(): boolean {
    return this.trafficInPercentage > this.trafficShutdownLimit * 100;
  }

  get receiveInMb(): number {
    return Math.round((this.receivedBytes / 1024 ** 2) * 100) / 100;
  }

  get localReceivedInMb(): number {
    return Math.round((this.localReceivedBytes / 1024 ** 2) * 100) / 100;
  }

  get transmitInMb(): number {
    return Math.round((this.transmitBytes / 1024 ** 2) * 100) / 100;
  }

  get localTransmitInMb(): number {
    return Math.round((this.localTransmitBytes / 1024 ** 2) * 100) / 100;
  }

  get receiveInGb(): number {
    return Math.round((this.receivedBytes / 1024 ** 3) * 100) / 100;
  }

  get localReceivedInGb(): number {
    return Math.round((this.localReceivedBytes / 1024 ** 3) * 100) / 100;
  }

  get transmitInGb(): number {
    return Math.round((this.transmitBytes / 1024 ** 3) * 100) / 100;
  }

  get localTransmitInGb(): number {
    return Math.round((this.localTransmitBytes / 1024 ** 3) * 100) / 100;
  }

  get localBytes(): number {
    return this.localReceivedBytes + this.localTransmitBytes;
  }

  get trafficInBytes(): number {
    const value = this.receivedBytes + this.transmitBytes - this.localBytes;
    return value < 0 ? 0 : value;
  }

  get trafficInMb(): number {
    return Math.round((this.trafficInBytes / 1024 ** 2) * 100) / 100;
  }

  get trafficInGb(): number {
    return Math.round((this.trafficInBytes / 1024 ** 3) * 100) / 100;
  }

  get limitBytes(): number {
    return this.limitInMb * 1024 ** 2;
  }

  get limitInGb(): number {
    return Math.round((this.limitBytes / 1024 ** 3) * 100) / 100;
  }

  get trafficInPercentage(): number {
    if (!this.limitInMb) {
      return 0;
    }
    const value = (this.trafficInMb ?? 0) / this.limitInMb;
    return value && isNumber(value) ? +(Math.round(value * 100 * 100) / 100).toFixed(2) : 0;
  }
}
