import { Expose, Transform, Type } from 'class-transformer';
import { isNumber } from 'class-validator';

export class EphemeralStorageDto {
  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @Expose()
  current: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @Expose()
  limit: number;

  get percentage(): number {
    this.limit = this.limit ?? 0;
    if (!this.limit) {
      return 0;
    }
    const value = (this.current ?? 0) / this.limit;
    return value && isNumber(value) ? +(Math.round(value * 100 * 100) / 100).toFixed(2) : 0;
  }
}
