import { Exclude, } from 'class-transformer';
import { TrafficTimeSeriesDto } from './traffic-time-series.dto';

export class TrafficTimeSeriesTotalDto extends TrafficTimeSeriesDto {
  @Exclude()
  timeStamp: Date;
}
