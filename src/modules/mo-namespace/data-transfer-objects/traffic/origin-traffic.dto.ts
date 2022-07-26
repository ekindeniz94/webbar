import { Expose, Transform, Type } from 'class-transformer';
import { isNumber } from 'class-validator';

export class OriginTrafficDto {
  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Type(() => Number)
  @Expose()
  receiveBytes: number;

  @Transform(({ value }) => (isNumber(value) ? value : 0))
  @Type(() => Number)
  @Expose()
  transmitBytes: number;

  get receiveInMb(): number {
    return Math.round((this.receiveBytes / 1024 ** 2) * 100) / 100;
  }

  get transmitInMb(): number {
    return Math.round((this.transmitBytes / 1024 ** 2) * 100) / 100;
  }

  get receiveInGb(): number {
    return Math.round((this.receiveBytes / 1024 ** 3) * 100) / 100;
  }

  get transmitInGb(): number {
    return Math.round((this.transmitBytes / 1024 ** 3) * 100) / 100;
  }
}
