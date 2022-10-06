import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

const trafficServerStartDate = moment('2022-10-04 00:00:00');

export class K8sManagerTrafficMessageDto {
  @Expose()
  podName: string;

  @Expose()
  namespace: string;

  @Expose()
  containerId: string;

  @Expose()
  packetsSum: number;

  @Expose()
  transmitBytes: number;

  @Expose()
  receivedBytes: number;

  @Expose()
  unknownBytes: number;

  @Transform(({ value, obj }) => {
    if (obj.localBytesTransmit) {
      value = obj.localBytesTransmit;
    }
    return value;
  })
  @Expose()
  localTransmitBytes: number;

  @Transform(({ value, obj }) => {
    if (obj.localBytesReceived) {
      value = obj.localBytesReceived;
    }
    return value;
  })
  @Expose()
  localReceivedBytes: number;

  @Transform(({ value }) =>
    value && value !== 'undefined' && value !== 'null' ? moment(new Date(value)).toDate() : value
  )
  @Expose()
  startTime: Date;

  @Transform(({ value, obj }) => {
    if (moment(trafficServerStartDate).isAfter(moment(new Date(obj.startTime)))) {
      return 0;
    }
    return value;
  })
  @Expose()
  transmitStartBytes: number;

  @Transform(({ value, obj }) => {
    if (moment(trafficServerStartDate).isAfter(moment(new Date(obj.startTime)))) {
      return 0;
    }
    return value;
  })
  @Expose()
  receivedStartBytes: number;
}
