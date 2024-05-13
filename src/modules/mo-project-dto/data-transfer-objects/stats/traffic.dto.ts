import { Expose } from 'class-transformer';
import _ from 'lodash';

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
