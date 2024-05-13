import { Expose, Transform } from 'class-transformer';
import _ from 'lodash';
import moment from 'moment';

export class TrafficDto {
  @Expose()
  limitInMb: number;

  @Expose()
  localReceivedBytes: number;

  @Expose()
  localTransmitBytes: number;

  @Expose()
  receivedBytes: number;

  @Expose()
  trafficShutdownLimit: number;

  @Expose()
  trafficWarningLimit: number;

  @Expose()
  transmitBytes: number;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string;

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
