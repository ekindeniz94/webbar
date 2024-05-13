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

  public totalTrafficBytes(): number {
    return _.sum([this.receivedBytes, this.transmitBytes, this.localReceivedBytes, this.localTransmitBytes]);
  }
}
