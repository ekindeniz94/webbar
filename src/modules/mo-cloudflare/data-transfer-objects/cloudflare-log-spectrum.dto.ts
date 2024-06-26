import { Expose, Transform, Type } from 'class-transformer';
import { SpectrumEventsEnum } from '../enums';
import { isNumber, isNumberString } from 'class-validator';
import moment from 'moment';

export class CloudflareLogSpectrumDto {
  @Expose()
  application: string;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 0))
  @Expose()
  status: number;

  @Expose()
  event: SpectrumEventsEnum;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 0))
  @Expose()
  clientBytes: number;

  @Expose()
  clientCountry: string;

  @Expose()
  clientIp: string;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 0))
  @Expose()
  clientPort: number;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  connectTimestamp: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  disconnectTimestamp: Date;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 0))
  @Expose()
  originBytes: number;

  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 0))
  @Expose()
  connectionCount: number;

  @Expose()
  originIp: string;

  @Expose()
  originPort: number;

  @Expose()
  originProto: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  timestamp: Date;
}
