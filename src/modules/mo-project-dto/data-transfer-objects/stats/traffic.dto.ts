import { Expose } from 'class-transformer';

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
}
